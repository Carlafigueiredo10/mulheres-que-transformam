import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mulheres que Transformam - MGI",
  description: "Promovendo a paridade de gênero nos cargos de liderança da administração pública federal através de dados, pactuação e políticas públicas estruturantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
