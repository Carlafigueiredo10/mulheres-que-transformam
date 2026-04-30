'use client';

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';

export interface NetworkFieldHandle {
  setMagnet: (x: number, y: number, radius: number, active: boolean) => void;
  triggerRipple: (x: number, y: number) => void;
}

interface NetworkFieldProps {
  className?: string;
}

type Tier = 'hub' | 'standard' | 'dust';

interface Node {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;
  brightnessPhase: number;
  brightnessSpeed: number;
  birthTime: number;
  hue: 'gold' | 'cream';
  tier: Tier;
  isSeed: boolean;
}

interface Edge {
  a: number;
  b: number;
  baseOpacity: number;
  birthTime: number;
  energized: number;
  ctrlOffset: number;
  hubBoost: number;
}

interface Ripple {
  x: number;
  y: number;
  time: number;
}

// easing pra birth com leve overshoot — sensação de "energia" ao nascer
const easeOutBack = (t: number) => {
  const c1 = 1.7;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const NetworkField = forwardRef<NetworkFieldHandle, NetworkFieldProps>(
  function NetworkField({ className }, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const magnetRef = useRef({ x: 0, y: 0, radius: 0, active: false });
    const ripplesRef = useRef<Ripple[]>([]);
    // Touch device → magnet desligado (evita "stuck on tap" UX bug).
    // Ripple no tap continua funcionando normalmente.
    const isTouchRef = useRef(false);

    useImperativeHandle(
      ref,
      () => ({
        setMagnet: (x, y, radius, active) => {
          magnetRef.current = {
            x,
            y,
            radius,
            active: isTouchRef.current ? false : active
          };
        },
        triggerRipple: (x, y) => {
          ripplesRef.current.push({ x, y, time: performance.now() });
          const cutoff = performance.now() - 2600;
          ripplesRef.current = ripplesRef.current.filter(
            (r) => r.time > cutoff
          );
        }
      }),
      []
    );

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      // Detecção de mobile, touch e CPU low-end — usadas pra dosar carga
      isTouchRef.current = window.matchMedia('(hover: none)').matches;
      const isLowEnd =
        (typeof navigator !== 'undefined'
          ? navigator.hardwareConcurrency ?? 8
          : 8) <= 4;
      let isMobile = false;

      let nodes: Node[] = [];
      let edges: Edge[] = [];
      let raf = 0;
      let width = 0;
      let height = 0;
      let startTime = performance.now();
      let lastFrameTime = 0;
      let isPaused = false;

      const buildNetwork = (w: number, h: number) => {
        // Atualiza isMobile do escopo externo (usado em draw pra fps clamp + filter)
        isMobile = w < 768;
        // Densidade dosada: desktop full, mobile reduzido, low-end ainda mais leve
        const targetNodes = isMobile ? (isLowEnd ? 30 : 38) : 55;
        const dustRatio = 0.32; // ~30% das nodes não-anchor são dust (background)

        nodes = [];
        edges = [];

        // 5 anchors — formam o esqueleto da rede e são todos hubs (visualmente densos)
        const anchors: Array<{
          x: number;
          y: number;
          delay: number;
          isSeed?: boolean;
        }> = [
          { x: w * 0.16, y: h * 0.42, delay: 0, isSeed: true },
          { x: w * 0.78, y: h * 0.32, delay: 1500 },
          { x: w * 0.55, y: h * 0.78, delay: 1700 },
          { x: w * 0.38, y: h * 0.18, delay: 1900 },
          { x: w * 0.88, y: h * 0.65, delay: 2100 }
        ];

        for (const a of anchors) {
          nodes.push({
            x: a.x,
            y: a.y,
            homeX: a.x,
            homeY: a.y,
            vx: 0,
            vy: 0,
            size: a.isSeed ? 4.6 : 3.2 + Math.random() * 0.6,
            baseOpacity: a.isSeed ? 1.0 : 0.85,
            brightnessPhase: Math.random() * Math.PI * 2,
            brightnessSpeed: a.isSeed ? 0.0018 : 0.0010 + Math.random() * 0.0006,
            birthTime: a.delay,
            hue: 'gold',
            tier: 'hub',
            isSeed: !!a.isSeed
          });
        }

        // Spawn restante organicamente irradiando dos anchors
        const minDist = isMobile ? 48 : 66;
        let attempts = 0;
        let nextBirth = 2300;

        while (nodes.length < targetNodes && attempts < 1200) {
          attempts++;
          const parent = nodes[Math.floor(Math.random() * nodes.length)];
          const angle = Math.random() * Math.PI * 2;
          const dist = minDist + Math.random() * minDist * 1.4;
          const x = parent.x + Math.cos(angle) * dist;
          const y = parent.y + Math.sin(angle) * dist;

          if (x < 22 || x > w - 22 || y < 22 || y > h - 22) continue;

          let tooClose = false;
          for (const n of nodes) {
            const dx = n.x - x;
            const dy = n.y - y;
            if (dx * dx + dy * dy < minDist * minDist) {
              tooClose = true;
              break;
            }
          }
          if (tooClose) continue;

          // Tier: dust (fundo, sutil) ou standard (estrutura)
          const isDust = Math.random() < dustRatio;
          const r = Math.random();

          nodes.push({
            x,
            y,
            homeX: x,
            homeY: y,
            vx: 0,
            vy: 0,
            size: isDust
              ? 0.5 + Math.random() * 0.7
              : 1.4 + Math.random() * 1.3,
            baseOpacity: isDust
              ? 0.22 + Math.random() * 0.18
              : 0.55 + Math.random() * 0.3,
            brightnessPhase: Math.random() * Math.PI * 2,
            brightnessSpeed: 0.0006 + Math.random() * 0.0010,
            birthTime: nextBirth,
            hue: !isDust && r < 0.18 ? 'cream' : 'gold',
            tier: isDust ? 'dust' : 'standard',
            isSeed: false
          });
          nextBirth += 50 + Math.random() * 70;
        }

        // Edges — cada node conecta aos 2-4 mais próximos
        const maxEdgeDist = minDist * 2.7;
        for (let i = 0; i < nodes.length; i++) {
          const candidates: Array<{ j: number; d: number }> = [];
          for (let j = 0; j < nodes.length; j++) {
            if (i === j) continue;
            const dx = nodes[j].x - nodes[i].x;
            const dy = nodes[j].y - nodes[i].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < maxEdgeDist) candidates.push({ j, d });
          }
          candidates.sort((a, b) => a.d - b.d);
          // Hubs conectam a mais coisas (mais "centros de gravidade")
          const baseEdgeCount = nodes[i].tier === 'hub' ? 4 : 2;
          const edgeCount = baseEdgeCount + Math.floor(Math.random() * 2);

          for (let k = 0; k < Math.min(edgeCount, candidates.length); k++) {
            const j = candidates[k].j;
            if (
              edges.find(
                (e) =>
                  (e.a === i && e.b === j) || (e.a === j && e.b === i)
              )
            )
              continue;

            const isHubEdge =
              nodes[i].tier === 'hub' || nodes[j].tier === 'hub';
            const isDustEdge =
              nodes[i].tier === 'dust' || nodes[j].tier === 'dust';

            edges.push({
              a: i,
              b: j,
              baseOpacity: isDustEdge
                ? 0.05 + Math.random() * 0.07
                : 0.13 + Math.random() * 0.12,
              birthTime:
                Math.max(nodes[i].birthTime, nodes[j].birthTime) + 200,
              energized: 0,
              ctrlOffset: (Math.random() - 0.5) * 28,
              hubBoost: isHubEdge ? 1.45 : 1.0
            });
          }
        }
      };

      const resize = () => {
        const rect = canvas.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        buildNetwork(width, height);
        startTime = performance.now();
      };

      const draw = () => {
        const now = performance.now();

        // Pause quando aba não está visível — economia de bateria real
        if (isPaused) {
          raf = requestAnimationFrame(draw);
          return;
        }

        // FPS clamp em mobile (45fps) — evita over-render desnecessário
        if (isMobile) {
          if (now - lastFrameTime < 22.2) {
            raf = requestAnimationFrame(draw);
            return;
          }
          lastFrameTime = now;
        }

        const elapsed = now - startTime;

        ctx.clearRect(0, 0, width, height);

        const magnet = magnetRef.current;
        const ripples = ripplesRef.current;

        // Update positions
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          if (elapsed < n.birthTime) continue;

          // Micro-movimento contínuo — quase imperceptível mas dá vida
          const wanderX = (Math.random() - 0.5) * 0.035;
          const wanderY = (Math.random() - 0.5) * 0.035;
          const returnX = (n.homeX - n.x) * 0.006;
          const returnY = (n.homeY - n.y) * 0.006;
          n.vx = n.vx * 0.92 + wanderX + returnX;
          n.vy = n.vy * 0.92 + wanderY + returnY;

          // Magnet — empurra nodes próximos pra fora (force field ao redor do CTA)
          if (magnet.active && magnet.radius > 0) {
            const dx = n.x - magnet.x;
            const dy = n.y - magnet.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < magnet.radius && d > 4) {
              const t = 1 - d / magnet.radius;
              const force = t * t * 1.4;
              n.vx += (dx / d) * force;
              n.vy += (dy / d) * force;
            }
          }

          n.x += n.vx;
          n.y += n.vy;
        }

        // Spontaneous edge flares — ~1.2/seg, dá sensação de sistema transmitindo
        if (Math.random() < 0.020 && edges.length > 0) {
          const idx = Math.floor(Math.random() * edges.length);
          const e = edges[idx];
          if (elapsed > e.birthTime + 800) {
            e.energized = Math.min(1, e.energized + 0.55);
          }
        }

        // === EDGES (camada 1: tudo que conecta) ===
        for (let e = 0; e < edges.length; e++) {
          const edge = edges[e];
          if (elapsed < edge.birthTime) continue;

          const a = nodes[edge.a];
          const b = nodes[edge.b];
          const edgeAge = elapsed - edge.birthTime;

          // Birth: linha "desenha" de a → b em 750ms
          const birthProgress = Math.min(1, edgeAge / 750);
          const drawX = a.x + (b.x - a.x) * birthProgress;
          const drawY = a.y + (b.y - a.y) * birthProgress;

          // Ripples energizam edges que a onda atravessa
          if (ripples.length > 0) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            for (let r = 0; r < ripples.length; r++) {
              const ripple = ripples[r];
              const rAge = now - ripple.time;
              if (rAge < 0 || rAge > 2400) continue;
              const rRadius = rAge * 0.6;
              const rIntensity = 1 - rAge / 2400;
              const dx = midX - ripple.x;
              const dy = midY - ripple.y;
              const d = Math.sqrt(dx * dx + dy * dy);
              if (Math.abs(d - rRadius) < 42) {
                edge.energized = Math.max(
                  edge.energized,
                  rIntensity * 0.85
                );
              }
            }
          }

          // Decay
          edge.energized = edge.energized * 0.94;

          const opacity = Math.min(
            0.65,
            (edge.baseOpacity + edge.energized) * edge.hubBoost
          );

          // Curva quadrática sutil — fluxo orgânico
          const midX = (a.x + drawX) / 2;
          const midY = (a.y + drawY) / 2;
          const dx = drawX - a.x;
          const dy = drawY - a.y;
          const len = Math.max(0.01, Math.sqrt(dx * dx + dy * dy));
          const perpX = (-dy / len) * edge.ctrlOffset;
          const perpY = (dx / len) * edge.ctrlOffset;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.quadraticCurveTo(midX + perpX, midY + perpY, drawX, drawY);
          ctx.strokeStyle = `rgba(201, 168, 106, ${opacity})`;
          ctx.lineWidth = 0.6 + edge.energized * 1.4;
          ctx.stroke();
        }

        // === NODES — em camadas pra criar profundidade de campo ===
        // 1) Dust (FUNDO) — desktop: ctx.filter blur (caro mas afia o efeito);
        //    mobile: gradient radial fake-blur (barato, simula profundidade sem matar FPS)
        if (!isMobile) {
          ctx.filter = 'blur(1.4px)';
        }
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          if (n.tier !== 'dust' || elapsed < n.birthTime) continue;
          const age = elapsed - n.birthTime;
          const birthRaw = Math.min(1, age / 600);
          const birthProgress = easeOutBack(birthRaw);
          const brightness =
            0.7 +
            Math.sin(now * n.brightnessSpeed + n.brightnessPhase) * 0.3;
          const opacity = n.baseOpacity * Math.min(1, birthRaw) * brightness;
          const size = n.size * birthProgress * 1.4;

          if (isMobile) {
            // Fake blur via gradient radial — borrão suave sem o custo do canvas filter
            const r = size * 2.4;
            const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r);
            const colorBase =
              n.hue === 'gold' ? '201, 168, 106' : '242, 234, 217';
            gradient.addColorStop(0, `rgba(${colorBase}, ${opacity * 0.9})`);
            gradient.addColorStop(1, `rgba(${colorBase}, 0)`);
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.fillStyle =
              n.hue === 'gold'
                ? `rgba(201, 168, 106, ${opacity})`
                : `rgba(242, 234, 217, ${opacity * 0.85})`;
            ctx.arc(n.x, n.y, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        if (!isMobile) {
          ctx.filter = 'none';
        }

        // 2) Standard (corpo da rede)
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          if (n.tier !== 'standard' || elapsed < n.birthTime) continue;
          const age = elapsed - n.birthTime;
          const birthRaw = Math.min(1, age / 600);
          const birthProgress = easeOutBack(birthRaw);
          const brightness =
            0.7 +
            Math.sin(now * n.brightnessSpeed + n.brightnessPhase) * 0.3;
          const opacity = n.baseOpacity * Math.min(1, birthRaw) * brightness;
          const size = n.size * birthProgress;

          ctx.beginPath();
          ctx.fillStyle =
            n.hue === 'gold'
              ? `rgba(201, 168, 106, ${opacity})`
              : `rgba(242, 234, 217, ${opacity * 0.85})`;
          ctx.arc(n.x, n.y, size, 0, Math.PI * 2);
          ctx.fill();
        }

        // 3) Hubs (focal points) — com glow
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          if (n.tier !== 'hub' || elapsed < n.birthTime) continue;
          const age = elapsed - n.birthTime;
          const birthRaw = Math.min(1, age / 800);
          const birthProgress = easeOutBack(birthRaw);
          const brightness =
            0.7 +
            Math.sin(now * n.brightnessSpeed + n.brightnessPhase) * 0.3;
          const opacity = n.baseOpacity * Math.min(1, birthRaw) * brightness;
          const size = n.size * birthProgress;

          // Halo do hub (mais dramático no seed) — glow mais forte na hierarquia
          const haloMult = n.isSeed ? 16 : 8;
          const haloPulse =
            n.isSeed
              ? 0.7 + Math.sin(now * 0.0018) * 0.3
              : 0.85 + Math.sin(now * 0.0012 + n.brightnessPhase) * 0.15;
          const haloRadius = size * haloMult * haloPulse;
          const haloOpacity =
            (n.isSeed ? 0.48 : 0.26) * birthProgress * haloPulse;

          const gradient = ctx.createRadialGradient(
            n.x,
            n.y,
            0,
            n.x,
            n.y,
            haloRadius
          );
          gradient.addColorStop(0, `rgba(201, 168, 106, ${haloOpacity})`);
          gradient.addColorStop(1, 'rgba(201, 168, 106, 0)');
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(n.x, n.y, haloRadius, 0, Math.PI * 2);
          ctx.fill();

          // Núcleo do hub
          ctx.beginPath();
          ctx.fillStyle = `rgba(201, 168, 106, ${opacity})`;
          ctx.arc(n.x, n.y, size, 0, Math.PI * 2);
          ctx.fill();

          // Brilho central pra hubs maiores
          if (n.isSeed || size > 2.5) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 240, 210, ${opacity * 0.6})`;
            ctx.arc(n.x, n.y, size * 0.4, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        raf = requestAnimationFrame(draw);
      };

      // Pause animation quando aba não está visível (economia de bateria)
      const onVisibilityChange = () => {
        isPaused = document.hidden;
      };

      resize();
      if (!reduce) {
        raf = requestAnimationFrame(draw);
      } else {
        // Render estado final estático (acessibilidade)
        startTime = performance.now() - 14000;
        draw();
      }

      window.addEventListener('resize', resize);
      document.addEventListener('visibilitychange', onVisibilityChange);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', onVisibilityChange);
      };
    }, []);

    return <canvas ref={canvasRef} className={className} aria-hidden />;
  }
);

export default NetworkField;
