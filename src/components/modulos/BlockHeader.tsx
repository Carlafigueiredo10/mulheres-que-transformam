interface BlockHeaderProps {
  label: string;
}

export default function BlockHeader({ label }: BlockHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.28em] font-body font-semibold text-[var(--eixo-ouro)]">
      <span
        aria-hidden
        className="inline-block w-8 h-px"
        style={{ background: 'var(--eixo-ouro)' }}
      />
      {label}
    </div>
  );
}
