import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full bg-linear-to-b from-transparent to-emerald-950/90 border-t border-orange-200/10 pt-16 pb-8 px-6 md:px-8 backdrop-blur-md">
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">

                {/* Parte Superior: Grid de Conteúdo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                    {/* Coluna 1: Branding */}
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-300">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            <h2 className="font-serif font-light text-xl tracking-widest text-white">
                                VALDO <span className="text-orange-300 font-medium">IMÓVEIS</span>
                            </h2>
                        </div>
                        <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
                            Em busca dos cenários mais exclusivos e sofisticados para os capítulos mais importantes da sua história.
                        </p>
                    </div>

                    {/* Coluna 2: Links Rápidos (Navegação Interna) */}
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-300/80">Navegação</span>
                        <ul className="flex flex-col gap-2 text-sm text-gray-300 font-light">
                            <li><a href="#inicio" className="hover:text-orange-300 transition-colors">Início</a></li>
                            <li><a href="#lancamentos" className="hover:text-orange-300 transition-colors">Lançamentos</a></li>
                            <li><a href="#destaques" className="hover:text-orange-300 transition-colors">Destaques</a></li>
                            <li><a href="#" className="hover:text-orange-300 transition-colors">Sobre Nós</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato / Atendimento */}
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-300/80">Atendimento</span>
                        <ul className="flex flex-col gap-2 text-sm text-gray-300 font-light">
                            <li className="flex items-center gap-2">
                                <span className="text-orange-300/60">📍</span> Av. Santos Dummond, 74000 - Fortaleza, CE
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-orange-300/60">📞</span> (85) 98002-8922
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-orange-300/60">✉️</span> contato@valdoimoveis.com.br
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Linha Divisória */}
                <div className="w-full h-px bg-orange-200/10"></div>

                {/* Parte Inferior: Direitos Autorais e Assinatura */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
                    <p>© 2026 Valdo Imóveis. Todos os direitos reservados.</p>
                    <p className="tracking-wide">
                        Desenvolvido com excelência por <span className="text-orange-300/60 font-medium">Samuel Abreu</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}