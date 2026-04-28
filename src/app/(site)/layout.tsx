import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MotionShell from '@/components/motion/MotionShell';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="eixos-theme min-h-screen">
      <Header />
      <MotionShell>
        <main>{children}</main>
      </MotionShell>
      <Footer />
    </div>
  );
}
