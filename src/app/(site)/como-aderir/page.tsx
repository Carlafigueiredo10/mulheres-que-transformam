'use client';

import { FormEvent, useState } from 'react';
import { modules } from '@/data/modules';
import { selosInfo } from '@/data/orgaos-aderentes';
import EixosTransversaisSection from '@/components/ui/EixosTransversaisSection';
import ComoFuncionaSection from '@/components/ui/ComoFuncionaSection';

const WHATSAPP_NUMBER = '5561998755013';
const WHATSAPP_DISPLAY = '(61) 99875-5013';
const CONTACT_EMAIL = 'mulheresquetransformam@gmail.com';

type FormState = {
  orgao: string;
  esfera: string;
  responsavel: string;
  cargo: string;
  email: string;
  telefone: string;
  moduloInicial: string;
  jaTemPolitica: string;
  mensagem: string;
};

const initialForm: FormState = {
  orgao: '',
  esfera: '',
  responsavel: '',
  cargo: '',
  email: '',
  telefone: '',
  moduloInicial: '',
  jaTemPolitica: '',
  mensagem: ''
};

const principios = [
  {
    titulo: 'Voluntária',
    texto:
      'A instituição decide se quer entrar e quando. Sem amarra de gestão, sem imposição normativa.'
  },
  {
    titulo: 'Modular',
    texto:
      'Você escolhe quais dos 6 módulos implementar e em que ordem. Cada órgão desenha seu próprio caminho.'
  },
  {
    titulo: 'Pactuada',
    texto:
      'Adesão progressiva, com apoio técnico continuado e metas escalonadas conforme a maturidade do órgão.'
  },
  {
    titulo: 'Sem custo',
    texto:
      'Toda a metodologia, kits de implementação e suporte técnico são oferecidos gratuitamente às instituições aderentes.'
  }
];

const beneficios = [
  {
    titulo: 'Selo Paridade Pública',
    texto:
      'Reconhecimento institucional em três níveis (Participante, Ativa, Inspiradora) conforme o avanço dos compromissos.'
  },
  {
    titulo: 'Acesso à Rede Conecta',
    texto:
      'Conexão com redes, coletivos e iniciativas de mulheres no serviço público brasileiro.'
  },
  {
    titulo: 'Apoio técnico continuado',
    texto:
      'Acompanhamento da equipe coordenadora durante o diagnóstico, a pactuação de metas e a implementação dos módulos.'
  },
  {
    titulo: 'Pontuação em editais federais',
    texto:
      'Pontuação adicional em chamadas públicas de fomento à inovação, transformação digital e formação de lideranças.'
  },
  {
    titulo: 'Prioridade em trilhas formativas',
    texto:
      'Acesso prioritário a cursos, mentorias e programas da ENAP e de instituições parceiras.'
  },
  {
    titulo: 'Visibilidade nacional',
    texto:
      'Destaque em eventos como a Semana de Inovação, menção em relatórios oficiais e participação em fóruns de decisão.'
  }
];

const seloOrder: Array<'participante' | 'ativa' | 'inspiradora'> = [
  'participante',
  'ativa',
  'inspiradora'
];

export default function ComoAderirPage() {
  const [form, setForm] = useState<FormState>(initialForm);

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) =>
      setForm((s) => ({ ...s, [field]: e.target.value }));

  const buildMessage = () => {
    const moduloLabel =
      modules.find((m) => m.id === form.moduloInicial)?.title ?? form.moduloInicial;
    const lines: (string | null)[] = [
      'Olá! Tenho interesse em manifestar a adesão ao programa Mulheres que Transformam.',
      '',
      `Órgão: ${form.orgao}`,
      `Esfera: ${form.esfera}`,
      `Responsável: ${form.responsavel}${form.cargo ? ' — ' + form.cargo : ''}`,
      `E-mail: ${form.email}`,
      form.telefone ? `Telefone: ${form.telefone}` : null,
      form.moduloInicial ? `Módulo de partida: ${moduloLabel}` : null,
      form.jaTemPolitica ? `Já temos política de paridade? ${form.jaTemPolitica}` : null,
      form.mensagem ? '' : null,
      form.mensagem ? form.mensagem : null
    ];
    return encodeURIComponent(lines.filter((l): l is string => l !== null).join('\n'));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage()}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const inputClass =
    'w-full rounded-xl px-4 py-3 font-body text-sm bg-[rgba(21,22,29,0.55)] border text-[var(--eixo-off-white)] placeholder:text-[var(--eixo-off-white-dim)] focus:outline-none focus:border-[var(--eixo-ouro)] transition-colors';
  const inputStyle = { borderColor: 'rgba(242, 234, 217, 0.12)' };
  const labelClass =
    'block font-body text-xs uppercase tracking-[0.2em] font-semibold text-[var(--eixo-ouro)] mb-2';

  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section className="pt-40 pb-20 px-6 relative">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(201,168,106,0.08), transparent 60%)'
          }}
        />
        <div className="max-w-3xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]">
            <span
              aria-hidden
              className="inline-block w-10 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            Adesão Institucional
            <span
              aria-hidden
              className="inline-block w-10 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
          </div>
          <h1
            className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] font-medium text-[var(--eixo-off-white)] mb-6"
            style={{ letterSpacing: '-0.015em' }}
          >
            Como aderir ao{' '}
            <span style={{ color: 'var(--eixo-ouro)' }}>programa</span>
          </h1>
          <p className="font-body text-base md:text-[1.05rem] leading-relaxed text-[var(--eixo-off-white-soft)] mb-10">
            O programa está em fase piloto e abre sua metodologia, materiais e
            apoio técnico a órgãos parceiros que queiram implementar a paridade
            de forma estruturada. Manifeste o interesse do seu órgão — entramos em
            contato com os próximos passos.
          </p>
          <a href="#manifestar" className="btn-primary">
            Manifestar interesse
          </a>
        </div>
      </section>

      {/* ============ 2. O QUE É A ADESÃO ============ */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]">
              <span
                aria-hidden
                className="inline-block w-10 h-px"
                style={{ background: 'var(--eixo-ouro)' }}
              />
              O que é a adesão
            </div>
            <h2
              className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-medium text-[var(--eixo-off-white)] mb-6"
              style={{ letterSpacing: '-0.015em' }}
            >
              Um compromisso público,{' '}
              <span style={{ color: 'var(--eixo-ouro)' }}>
                voluntário e sem custo.
              </span>
            </h2>
            <p className="font-body text-base md:text-[1.05rem] leading-relaxed text-[var(--eixo-off-white-soft)]">
              Aderir significa pactuar publicamente metas de paridade na liderança
              do seu órgão e desenhar, com apoio técnico, um plano de ação adaptado
              à sua realidade institucional.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {principios.map((p) => (
              <li
                key={p.titulo}
                className="rounded-2xl p-6 border h-full"
                style={{
                  background: 'rgba(21, 22, 29, 0.55)',
                  borderColor: 'rgba(242, 234, 217, 0.08)'
                }}
              >
                <h3
                  className="font-display font-medium mb-3 leading-tight"
                  style={{ fontSize: '1.15rem', color: 'var(--eixo-off-white)' }}
                >
                  {p.titulo}
                </h3>
                <p className="font-body text-sm leading-relaxed text-[var(--eixo-off-white-soft)]">
                  {p.texto}
                </p>
              </li>
            ))}
          </ul>

          <div
            className="rounded-2xl p-6 md:p-8 border max-w-4xl mx-auto"
            style={{
              background: 'rgba(21, 22, 29, 0.35)',
              borderColor: 'rgba(242, 234, 217, 0.06)'
            }}
          >
            <div
              className="text-[10px] uppercase tracking-[0.28em] font-body font-semibold mb-3"
              style={{ color: 'var(--eixo-ouro)' }}
            >
              Base normativa
            </div>
            <p className="font-body text-sm leading-relaxed text-[var(--eixo-off-white-soft)]">
              Iniciativa alinhada ao Decreto nº 11.489/2023 (diversidade nas
              nomeações), à Portaria nº 6.719/2024 (enfrentamento ao assédio), aos
              ODS 5.5 e CEDAW, e à meta de paridade de gênero do PPA 2024–2027.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 3. EIXOS TRANSVERSAIS (reuso) ============ */}
      <EixosTransversaisSection />

      {/* ============ 4. COMO VAI FUNCIONAR (reuso) ============ */}
      <ComoFuncionaSection />

      {/* ============ 5. SELO PARIDADE PÚBLICA ============ */}
      <section className="py-24 md:py-32 px-6 relative">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.05), transparent 60%)'
          }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]">
              <span
                aria-hidden
                className="inline-block w-10 h-px"
                style={{ background: 'var(--eixo-ouro)' }}
              />
              Selo Paridade Pública
              <span
                aria-hidden
                className="inline-block w-10 h-px"
                style={{ background: 'var(--eixo-ouro)' }}
              />
            </div>
            <h2
              className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-medium text-[var(--eixo-off-white)] mb-6"
              style={{ letterSpacing: '-0.015em' }}
            >
              Três níveis de{' '}
              <span style={{ color: 'var(--eixo-ouro)' }}>reconhecimento</span>.
            </h2>
            <p className="font-body text-base md:text-[1.05rem] leading-relaxed text-[var(--eixo-off-white-soft)]">
              O selo evolui conforme o compromisso institucional se consolida.
              Cada órgão entra pelo nível Participante e progride no seu ritmo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {seloOrder.map((nivel, i) => {
              const selo = selosInfo.find((s) => s.nivel === nivel)!;
              const isLast = i === seloOrder.length - 1;
              return (
                <article
                  key={selo.nivel}
                  className="rounded-2xl p-7 border flex flex-col"
                  style={{
                    background: isLast
                      ? 'rgba(201, 168, 106, 0.08)'
                      : 'rgba(21, 22, 29, 0.55)',
                    borderColor: isLast
                      ? 'rgba(201, 168, 106, 0.4)'
                      : 'rgba(242, 234, 217, 0.08)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="font-display"
                      style={{
                        fontSize: '1.5rem',
                        color: 'var(--eixo-ouro)',
                        fontWeight: 500
                      }}
                    >
                      0{i + 1}
                    </span>
                    <h3
                      className="font-display font-medium leading-tight"
                      style={{
                        fontSize: '1.4rem',
                        color: 'var(--eixo-off-white)'
                      }}
                    >
                      {selo.nome}
                    </h3>
                  </div>

                  <div
                    className="text-[10px] uppercase tracking-[0.22em] font-body font-semibold mb-3"
                    style={{ color: 'var(--eixo-off-white-dim)' }}
                  >
                    Requisitos
                  </div>
                  <ul className="space-y-2 mb-6">
                    {selo.requisitos.map((r, idx) => (
                      <li
                        key={idx}
                        className="font-body text-xs flex gap-3 items-start text-[var(--eixo-off-white-soft)] leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="block w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: 'var(--eixo-ouro)' }}
                        />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="text-[10px] uppercase tracking-[0.22em] font-body font-semibold mb-3"
                    style={{ color: 'var(--eixo-off-white-dim)' }}
                  >
                    Benefícios
                  </div>
                  <ul className="space-y-2">
                    {selo.beneficios.map((b, idx) => (
                      <li
                        key={idx}
                        className="font-body text-xs flex gap-3 items-start text-[var(--eixo-off-white-soft)] leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="block w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: 'var(--eixo-ouro)' }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 6. O QUE SUA INSTITUIÇÃO GANHA ============ */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]">
              <span
                aria-hidden
                className="inline-block w-10 h-px"
                style={{ background: 'var(--eixo-ouro)' }}
              />
              O que sua instituição ganha
              <span
                aria-hidden
                className="inline-block w-10 h-px"
                style={{ background: 'var(--eixo-ouro)' }}
              />
            </div>
            <h2
              className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-medium text-[var(--eixo-off-white)] mb-6"
              style={{ letterSpacing: '-0.015em' }}
            >
              Reconhecimento, suporte e{' '}
              <span style={{ color: 'var(--eixo-ouro)' }}>influência</span>.
            </h2>
            <p className="font-body text-base md:text-[1.05rem] leading-relaxed text-[var(--eixo-off-white-soft)]">
              A adesão não é só um selo. É a entrada num ecossistema institucional
              que valoriza, apoia e dá visibilidade aos órgãos comprometidos com a
              paridade.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {beneficios.map((b) => (
              <li
                key={b.titulo}
                className="rounded-2xl p-6 border h-full"
                style={{
                  background: 'rgba(21, 22, 29, 0.55)',
                  borderColor: 'rgba(242, 234, 217, 0.08)'
                }}
              >
                <h3
                  className="font-display font-medium mb-3 leading-tight"
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--eixo-off-white)'
                  }}
                >
                  {b.titulo}
                </h3>
                <p className="font-body text-sm leading-relaxed text-[var(--eixo-off-white-soft)]">
                  {b.texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 7. FORMULÁRIO ============ */}
      <section id="manifestar" className="pt-16 pb-24 px-6 relative">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(201,168,106,0.08), transparent 60%)'
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]">
              <span
                aria-hidden
                className="inline-block w-10 h-px"
                style={{ background: 'var(--eixo-ouro)' }}
              />
              Manifestar interesse
              <span
                aria-hidden
                className="inline-block w-10 h-px"
                style={{ background: 'var(--eixo-ouro)' }}
              />
            </div>
            <h2
              className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.1] font-medium text-[var(--eixo-off-white)] mb-5"
              style={{ letterSpacing: '-0.015em' }}
            >
              Conte sobre o seu órgão.
            </h2>
            <p className="font-body text-base text-[var(--eixo-off-white-soft)] leading-relaxed">
              Vamos retornar com os próximos passos da adesão e ajudar a desenhar
              o plano que faz sentido para a sua realidade.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl p-8 md:p-10 border"
            style={{
              background: 'rgba(21, 22, 29, 0.45)',
              borderColor: 'rgba(242, 234, 217, 0.08)'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className={labelClass} htmlFor="orgao">
                  Nome do órgão *
                </label>
                <input
                  id="orgao"
                  required
                  type="text"
                  value={form.orgao}
                  onChange={update('orgao')}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Ex.: Ministério do Turismo"
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="esfera">
                  Esfera *
                </label>
                <select
                  id="esfera"
                  required
                  value={form.esfera}
                  onChange={update('esfera')}
                  className={inputClass}
                  style={inputStyle}
                >
                  <option value="">Selecione</option>
                  <option value="Federal">Federal</option>
                  <option value="Estadual">Estadual</option>
                  <option value="Municipal">Municipal</option>
                  <option value="Distrital">Distrital</option>
                  <option value="Autarquia / Empresa Pública">
                    Autarquia / Empresa Pública
                  </option>
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="moduloInicial">
                  Por onde gostaria de começar?
                </label>
                <select
                  id="moduloInicial"
                  value={form.moduloInicial}
                  onChange={update('moduloInicial')}
                  className={inputClass}
                  style={inputStyle}
                >
                  <option value="">Ainda não decidi</option>
                  {modules.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="responsavel">
                  Nome do responsável *
                </label>
                <input
                  id="responsavel"
                  required
                  type="text"
                  value={form.responsavel}
                  onChange={update('responsavel')}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Como devemos chamar?"
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="cargo">
                  Cargo *
                </label>
                <input
                  id="cargo"
                  required
                  type="text"
                  value={form.cargo}
                  onChange={update('cargo')}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Ex.: Secretária-Executiva"
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  E-mail institucional *
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="nome@orgao.gov.br"
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="telefone">
                  Telefone para contato
                </label>
                <input
                  id="telefone"
                  type="tel"
                  value={form.telefone}
                  onChange={update('telefone')}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="(DDD) 9XXXX-XXXX"
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelClass} htmlFor="jaTemPolitica">
                  O órgão já possui política ou comitê de paridade?
                </label>
                <select
                  id="jaTemPolitica"
                  value={form.jaTemPolitica}
                  onChange={update('jaTemPolitica')}
                  className={inputClass}
                  style={inputStyle}
                >
                  <option value="">Selecione</option>
                  <option value="Sim, formalizada">Sim, formalizada</option>
                  <option value="Em construção">Em construção</option>
                  <option value="Não, mas há interesse">Não, mas há interesse</option>
                  <option value="Não tenho essa informação">
                    Não tenho essa informação
                  </option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className={labelClass} htmlFor="mensagem">
                  Algo a mais que queira nos contar?
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={form.mensagem}
                  onChange={update('mensagem')}
                  className={`${inputClass} resize-y`}
                  style={inputStyle}
                  placeholder="Contexto, dúvidas, prazos..."
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <button
                type="submit"
                className="btn-primary self-center"
              >
                Enviar manifestação via WhatsApp
              </button>
              <p className="text-center font-body text-xs text-[var(--eixo-off-white-dim)]">
                Suas respostas formam uma mensagem que abre direto no WhatsApp.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ============ 8. CONTATO DIRETO ============ */}
      <section className="pb-40 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-8 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]">
            <span
              aria-hidden
              className="inline-block w-10 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            Prefere falar direto?
            <span
              aria-hidden
              className="inline-block w-10 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
