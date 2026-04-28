import Link from 'next/link';

export default function EixosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="eixos-theme eixos-grain min-h-screen relative overflow-x-hidden">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md" style={{ background: 'rgba(15,16,20,0.55)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-base font-medium text-[var(--eixo-off-white)] hover:text-[var(--eixo-ouro)] transition-colors"
          >
            ← Mulheres que Transformam
          </Link>
          <Link
            href="/#modulos"
            className="font-body text-xs uppercase tracking-[0.2em] text-[var(--eixo-off-white-soft)] hover:text-[var(--eixo-off-white)] transition-colors"
          >
            6 módulos
          </Link>
        </div>
      </header>
      <main className="relative">{children}</main>
    </div>
  );
}
