import Image from "next/image"
import Background_Image from "../../public/background_photo.jpg"

export default function Hero() {
    return (
        <div id="inicio" className="relative flex w-full min-h-screen items-center justify-center overflow-hidden bg-emerald-950">
            {/* Imagem de Fundo com Overlay Duplo para Máxima Legibilidade */}
            <div className="absolute inset-0 z-10">
                <Image
                    src={Background_Image}
                    fill
                    className="opacity-40 object-cover scale-105 animate-[subtle-zoom_20s_ease-out_infinite]"
                    alt="background_photo"
                    placeholder="blur"
                    priority
                />
                {/* Camada extra de contraste */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-950/50 to-transparent z-11"></div>
            </div>

            {/* Máscara de transição inferior aprimorada */}
            <div className="absolute -bottom-1 left-0 right-0 h-64 z-20 pointer-events-none
                bg-gradient-to-t from-emerald-950 via-amber-950/20 to-transparent
                backdrop-blur-[2px]">
            </div>

            {/* Container Grid */}
            <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center px-6 md:px-8 z-30 w-full pt-20 lg:pt-0">
                
                {/* Lado Esquerdo: Texto Imponente */}
                <div className="animate-fade-in-up space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-300 bg-orange-300/10 px-3.5 py-1.5 rounded-full border border-orange-300/20 inline-block backdrop-blur-sm">
                        Exclusividade & Qualidade
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-shadow-black text-shadow-md text-white leading-[1.1] text-left tracking-tight font-serif">
                        O cenário perfeito para os seus 
                        <span className="font-medium text-orange-300 block sm:inline"> melhores</span> momentos.
                    </h1>
                </div>

                {/* Lado Direito: Formulário Premium Coeso */}
                <div className="flex justify-center lg:justify-end animate-fade-in-up [animation-delay:200ms] w-full">
                    <div className="bg-emerald-950/80 p-6 md:p-8 rounded-3xl border border-orange-200/20 shadow-2xl w-full max-w-lg backdrop-blur-md">
                        <h3 className="text-2xl md:text-3xl font-light text-white mb-6 font-serif tracking-wide border-b border-orange-200/10 pb-4">
                            Busque seu <span className="text-orange-300 font-normal">imóvel</span>
                        </h3>

                        <form className="flex flex-col gap-5">
                            <div>
                                <label className="text-xs font-bold text-orange-200/70 block mb-2 uppercase tracking-wider">Tipo do Imóvel</label>
                                <select className="w-full p-3.5 bg-emerald-900/40 border border-orange-200/10 rounded-xl text-white outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all cursor-pointer appearance-none">
                                    <option className="bg-emerald-950 text-white">Apartamento</option>
                                    <option className="bg-emerald-950 text-white">Casa</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-orange-200/70 block mb-2 uppercase tracking-wider">Localização</label>
                                <select className="w-full p-3.5 bg-emerald-900/40 border border-orange-200/10 rounded-xl text-white outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all cursor-pointer appearance-none">
                                    <option className="bg-emerald-950 text-white">Bairro, cidade</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-orange-200/70 block mb-2 uppercase tracking-wider">Valor Mínimo</label>
                                    <input type="text" placeholder="R$ 0,00" className="w-full p-3.5 bg-emerald-900/40 text-white placeholder-emerald-100/30 border border-orange-200/10 rounded-xl outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-orange-200/70 block mb-2 uppercase tracking-wider">Valor Máximo</label>
                                    <input type="text" placeholder="R$ 0,00" className="w-full p-3.5 bg-emerald-900/40 text-white placeholder-emerald-100/30 border border-orange-200/10 rounded-xl outline-none focus:border-orange-300/50 focus:bg-emerald-900/80 transition-all" />
                                </div>
                            </div>

                            <button className="w-full bg-orange-200 hover:bg-orange-300 hover:cursor-pointer hover:shadow-xl hover:shadow-orange-950/50 text-emerald-950 font-bold py-4 mt-2 flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-widest rounded-xl text-sm transform active:scale-[0.98]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                Encontrar Imóvel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}