"use client"
import { useState, useEffect } from "react"
import Button from "./Button";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const ButtonAny = Button as any;

    // Efeito sutil para mudar o fundo da Nav ao rolar a página
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full
            ${scrolled
                ? "bg-emerald-950/80 backdrop-blur-md border-b border-orange-200/10 shadow-lg py-3"
                : "bg-gradient-to-b from-black/40 to-transparent py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center w-full">

                {/* LOGO: Alinhado com a Tipografia do Projeto */}
                <div className="flex gap-3 items-center z-50 cursor-pointer group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-orange-300 group-hover:scale-110 transition-transform duration-300">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                    <h1 className="font-serif font-light text-xl md:text-2xl tracking-widest text-white">
                        VALDO <span className="text-orange-300 font-medium">IMÓVEIS</span>
                    </h1>
                </div>

                {/* MENU HAMBÚRGUER: Mobile Inteligente */}
                <button
                    className="block lg:hidden z-50 focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menu"
                >
                    <div className="space-y-1.5 w-6">
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </div>
                </button>

                {/* NAVEGAÇÃO: Unificada com Breakpoints Semânticos (Padrão Tailwind lg:) */}
                <nav className={`
    /* Classes Base / Comportamento no Mobile (Gaveta Lateral) */
    fixed top-0 right-0 h-screen w-72 bg-emerald-950/95 backdrop-blur-xl border-l border-orange-200/10
    flex flex-col pt-32 px-8 gap-6 z-40 transition-transform duration-300 ease-in-out shadow-2xl
    
    /* Lógica de Aberto/Fechado no Mobile */
    ${isOpen ? "translate-x-0" : "translate-x-full"}

    /* RESET PARA DESKTOP (lg:) - Transforma a gaveta em uma barra horizontal limpa */
    lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:shadow-none
    lg:flex lg:flex-row lg:items-center lg:pt-0 lg:px-0 lg:gap-8 lg:translate-x-0 lg:z-auto
`}>

                    {/* Items de Link */}
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-5 lg:gap-15">
                        <Button><span className="font-sans text-sm tracking-wide">Campanha 1</span></Button>
                        <Button><span className="font-sans text-sm tracking-wide">Campanha 2</span></Button>
                        <Button><span className="font-sans text-sm tracking-wide">Campanha 3</span></Button>
                        <Button><span className="font-sans text-sm tracking-wide">Campanha 4</span></Button>
                    </div>
                </nav>

                {/* Overlay de fundo para fechar o menu ao clicar fora no Mobile */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-30"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </div>
        </header>
    )
}