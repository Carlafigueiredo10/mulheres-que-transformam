'use client';

import Link from 'next/link';
import { eixosTransversais } from '@/data/eixos-transversais';

export default function EixosTransversaisSection() {
  return (
    <section
      id="eixos-transversais"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 100%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-300 rounded-full text-xs font-semibold mb-4 border border-amber-500/30 uppercase tracking-wider">
            Regras de Ouro
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            5 Eixos Transversais
          </h2>
          <p className="text-base md:text-lg text-purple-100/80 max-w-2xl mx-auto">
            Premissas que <strong className="text-white">atravessam todos os 6 módulos</strong>.
            Qualquer caminho escolhido deve, obrigatoriamente, ser orientado por elas.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {eixosTransversais.map((eixo) => (
            <li
              key={eixo.id}
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-amber-400/40 transition-all duration-300"
            >
              <div className="text-3xl mb-3" aria-hidden>
                {eixo.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-tight">
                {eixo.shortTitle}
              </h3>
              <p className="text-xs text-purple-100/70 leading-relaxed">
                {eixo.description}
              </p>
              {eixo.reference && (
                <p className="mt-3 text-[10px] text-amber-300/80 font-medium">
                  {eixo.reference}
                </p>
              )}
            </li>
          ))}
        </ul>

        <div className="text-center mt-10">
          <Link
            href="/eixos-transversais"
            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-full border border-white/20 hover:border-amber-400/50 transition-all duration-300 text-sm"
          >
            Conhecer cada eixo em detalhe
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
