import Link from 'next/link';
import { eixosTransversais } from '@/data/eixos-transversais';

export default function TransversalLink() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-display text-[clamp(1.2rem,2.4vw,1.85rem)] leading-[1.3] text-[var(--eixo-off-white)] mb-14">
          Este módulo só funciona se atravessado pelos
          <span style={{ color: 'var(--eixo-ouro)' }}> 5 eixos transversais.</span>
        </p>

        <div className="overflow-x-auto pb-2 mb-14 -mx-6 px-6">
          <div className="min-w-[640px] mx-auto max-w-3xl">
            <div className="grid grid-cols-5 gap-3 mb-3">
              {eixosTransversais.map((eixo) => (
                <div
                  key={eixo.id}
                  className="text-center font-body text-[10px] uppercase tracking-[0.22em] text-[var(--eixo-off-white-soft)] leading-tight"
                >
                  {eixo.shortTitle}
                </div>
              ))}
            </div>
            <div className="relative h-3">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(201,168,106,0) 0%, rgba(201,168,106,0.55) 8%, rgba(201,168,106,0.55) 92%, rgba(201,168,106,0) 100%)'
                }}
              />
              <div className="grid grid-cols-5 absolute inset-0">
                {eixosTransversais.map((eixo) => (
                  <div key={eixo.id} className="flex justify-center items-center">
                    <span
                      className="block w-1.5 h-1.5 rounded-full"
                      style={{
                        background: 'var(--eixo-ouro)',
                        opacity: 0.55
                      }}
                    />
                  </div>
                ))}
              </div>
              <span
                aria-hidden
                className="eixo-bolinha-traversa absolute top-1/2 block w-2.5 h-2.5 rounded-full -translate-y-1/2 -translate-x-1/2"
                style={{
                  background: 'var(--eixo-ouro)',
                  boxShadow: '0 0 14px rgba(201,168,106,0.75), 0 0 4px rgba(201,168,106,0.9)'
                }}
              />
            </div>
          </div>
        </div>

        <Link
          href="/eixos-transversais"
          className="group inline-flex items-center justify-center gap-2 px-7 py-3 font-body font-medium text-sm tracking-wide rounded-full border transition-all duration-300"
          style={{
            borderColor: 'rgba(201, 168, 106, 0.45)',
            color: 'var(--eixo-off-white)'
          }}
        >
          Conheça os Eixos Transversais
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
