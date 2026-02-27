import Image from "next/image"
import Background_Image from "../../public/background_photo.jpg"

export default function Hero() {
    return (
        <div className="relative flex w-full min-h-screen  items-center justify-center overflow-hidden">
            {/* Imagem de Fundo */}
            <div className="absolute inset-0 z-10">
                <Image
                    src={Background_Image}
                    fill
                    className="opacity-50 object-cover"
                    alt="background_photo"
                    placeholder="blur"
                    priority
                />
            </div>
            <div className="absolute -bottom-10 left-0 right-0 h-64 z-20 pointer-events-none
                bg-amber-950/20 
                mask-[radial-gradient(ellipse_at_bottom,white_10%,transparent_70%)]
                backdrop-blur-[6px]">
            </div>

            {/* Container Grid */}
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-15 px-8 z-10 w-full">
                {/* Lado Esquerdo: Texto */}
                <div className="animate-fade-in-up">
                    <h2 className="text-5xl md:text-8xl font-extralight text-shadow-black text-shadow-sm text-white leading-[1.1] text-left tracking-tight">
                        O cenário perfeito para os seus 
                        <span className="font-medium text-orange-300 "> melhores</span> momentos.
                    </h2>
                </div>

                {/* Lado Direito: Formulário */}
                <div className="flex justify-center lg:justify-end animate-fade-in-up [animation-delay:200ms]">
                    <div className="bg-emerald-950 p-8 rounded-4xl border-2 border-orange-200 shadow-2xl w-full max-w-lg">
                        <h3 className="text-3xl font-semibold text-white mb-6 font-serif">Busque seu imóvel</h3>

                        <form className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm font-bold text-white block mb-1">Tipo do Imóvel</label>
                                <select className="w-full p-3 bg-gray-100 border-none rounded text-gray-700 outline-none">
                                    <option>Apartamento</option>
                                    <option>Casa</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-bold text-white block mb-1">Localização</label>
                                <select className="w-full p-3 bg-gray-100 border-none rounded text-gray-700 outline-none">
                                    <option>Bairro, cidade</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-bold text-white block mb-1">Valor Mínimo</label>
                                    <input type="text" placeholder="R$ 0,00" className="w-full p-3 bg-gray-100 text-black border-none rounded outline-none" />
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-white block mb-1">Valor Máximo</label>
                                    <input type="text" placeholder="R$ 0,00" className="w-full p-3 bg-gray-100 text-black border-none rounded outline-none" />
                                </div>
                            </div>

                            <button className="w-full bg-orange-200 hover:bg-orange-300 hover:cursor-pointer hover:shadow-md hover:shadow-black hover:text-gray-900 text-black font-bold py-4 mt-4 flex items-center justify-center gap-2 transition-colors uppercase tracking-wider rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}