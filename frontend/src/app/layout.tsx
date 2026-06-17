import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore: CSS module type declarations may not be present in this environment
import "./globals.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LP - Valdo Imóveis",
  description: "Landing Page Imóveis de Alto Padrão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-emerald-950 text-white min-h-screen`}
      >
        {/* Cabeçalho de Navegação */}
        <NavBar /> 
        
        {/* Conteúdo Principal das Páginas */}
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}