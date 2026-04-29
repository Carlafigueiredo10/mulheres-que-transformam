'use client';

import { FormEvent, useState } from 'react';
import { modules } from '@/data/modules';

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
      'Olá! Tenho interesse em aderir ao programa Mulheres que Transformam.',
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
      <section className="pt-40 pb-16 px-6 relative">
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
          <p className="font-body text-base md:text-[1.05rem] leading-relaxed text-[var(--eixo-off-white-soft)]">
            Conte um pouco sobre o seu órgão. Vamos retornar com os próximos passos da adesão
            e ajudar a desenhar o plano que faz sentido para a sua realidade institucional.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <form
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto rounded-2xl p-8 md:p-10 border"
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
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-body font-semibold text-sm tracking-wide rounded-full transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'var(--eixo-ouro)',
                color: 'var(--eixo-grafite)'
              }}
            >
              Enviar via WhatsApp
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
            <p className="text-center font-body text-xs text-[var(--eixo-off-white-dim)]">
              Suas respostas formam uma mensagem que abre direto no WhatsApp.
            </p>
          </div>
        </form>
      </section>

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
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-body font-medium text-sm tracking-wide rounded-full border transition-all duration-300"
              style={{
                borderColor: 'rgba(201, 168, 106, 0.35)',
                color: 'var(--eixo-off-white)'
              }}
            >
              WhatsApp {WHATSAPP_DISPLAY}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-body font-medium text-sm tracking-wide rounded-full border transition-all duration-300"
              style={{
                borderColor: 'rgba(201, 168, 106, 0.35)',
                color: 'var(--eixo-off-white)'
              }}
            >
              {CONTACT_EMAIL}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
