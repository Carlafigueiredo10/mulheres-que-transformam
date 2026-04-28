import MotionShell from '@/components/motion/MotionShell';

export default function ObservatorioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <MotionShell>{children}</MotionShell>
    </div>
  );
}
