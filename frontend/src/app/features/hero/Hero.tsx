"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import Background_Image from "../../public/background_photo.jpg"

export default function Hero() {
    const router = useRouter()

    const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Captura os dados do formulário 
        const formData = new FormData(e.currentTarget)
        const tipo = formData.get("tipo")?.toString() || ""
        const localizacao = formData.get("localizacao")?.toString() || ""
        // const valorMinimo = formData.get("valorMinimo")?.toString() || ""
        // const valorMaximo = formData.get("valorMaximo")?.toString() || ""

        const params = new URLSearchParams()
        if (tipo) params.set("tipo", tipo)
        if (localizacao) params.set("localizacao", localizacao)
        // if (valorMinimo) params.set("valorMinimo", valorMinimo)
        // if (valorMaximo) params.set("valorMaximo", valorMaximo)

        router.push(`/imoveis?${params.toString()}`)
    }

    return (
        <div id="inicio" className="relative flex w-full min-h-screen items-center justify-center overflow-hidden bg-emerald-950">
            {/* Imagem de Fundo */}
            <div className="absolute inset-0 z-10">
                <Image
                    src={Background_Image}
                    fill
                    className="opacity-40 object-cover scale-105 animate-[subtle-zoom_20s_ease-out_infinite]"
                    alt="background_photo"
                    placeholder="blur"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-emerald-950/80 via-emerald-950/50 to-transparent z-11"></div>
            </div>

            <div className="absolute -bottom-1 left-0 right-0 h-64 z-20 pointer-events-none
                bg-linear-to-t from-emerald-950 via-amber-950/20 to-transparent
                backdrop-blur-[2px]">
            </div>

            {/* Container Grid */}
            <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center px-6 md:px-8 z-30 w-full pt-20 lg:pt-0">

                {/* Lado Esquerdo: Texto */}
                <div className="animate-fade-in-up space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-300 bg-orange-300/10 px-3.5 py-1.5 rounded-full border border-orange-300/20 inline-block backdrop-blur-sm">
                        Exclusividade & Qualidade
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-shadow-black text-shadow-md text-white leading-[1.1] text-left tracking-tight font-serif">
                        O cenário perfeito para os seus
                        <span className="font-medium text-orange-300 block sm:inline"> melhores</span> momentos.
                    </h1>
                </div>

                {/* Lado Direito: Formulário */}
                <div className="flex justify-center lg:justify-end animate-fade-in-up [animation-delay:200ms] w-full">
                    <div className="bg-emerald-950/60 p-6 md:p-8 rounded-3xl border border-orange-200/10 shadow-2xl w-full max-w-lg backdrop-blur-md">

                        {/* Cabeçalho do Formulário */}
                        <h3 className="text-2xl md:text-3xl font-light text-white mb-6 font-serif tracking-wide border-b border-orange-200/10 pb-4">
                            Busque seu <span className="text-orange-300 font-normal">imóvel</span>
                        </h3>

                        <form onSubmit={handleSearch} className="flex flex-col gap-5">

                            {/* Campo: Tipo do Imóvel */}
                            <div className="flex flex-col gap-2 relative group">
                                <label className="text-xs font-bold text-orange-200/60 uppercase tracking-widest">Tipo do Imóvel</label>
                                <div className="relative flex items-center">
                                    <select
                                        name="tipo"
                                        className="w-full p-3.5 pr-10 bg-emerald-900/30 text-white border border-orange-200/10 rounded-2xl outline-none focus:border-orange-300/40 focus:bg-emerald-900/60 transition-all duration-300 cursor-pointer appearance-none text-sm font-sans tracking-wide"
                                    >
                                        <option value="" className="bg-emerald-950 text-white/90">Todos os tipos</option>
                                        <option value="1" className="bg-emerald-950 text-white/90">Apartamento</option>
                                        <option value="5" className="bg-emerald-950 text-white/90">Casa de Rua</option>
                                        <option value="6" className="bg-emerald-950 text-white/90">Casa de Condomínio</option>
                                        <option value="12" className="bg-emerald-950 text-white/90">Lote Residencial</option>
                                    </select>
                                    <div className="absolute right-4 pointer-events-none text-orange-300/60 group-focus-within:text-orange-300 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Campo: Localização */}
                            <div className="flex flex-col gap-2 relative">
                                <label className="text-xs font-bold text-orange-200/60 uppercase tracking-widest">Localização</label>
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        name="localizacao"
                                        placeholder="Ex: Riviera, Centro..."
                                        className="w-full p-3.5 pl-11 bg-emerald-900/30 text-white placeholder-emerald-100/20 border border-orange-200/10 rounded-2xl outline-none focus:border-orange-300/40 focus:bg-emerald-900/60 transition-all duration-300 text-sm font-sans tracking-wide"
                                    />
                                    <div className="absolute left-4 pointer-events-none text-orange-300/40">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Botão de Envio */}
                            <button
                                type="submit"
                                className="w-full mt-2 py-4 px-6 inline-flex items-center justify-center gap-2 rounded-2xl font-bold uppercase tracking-widest text-xs text-emerald-950 bg-orange-200  hover:bg-orange-300 hover:shadow-xl hover:shadow-orange-950/40  transition-duration cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-orange-300/50 transform active:scale-[0.97]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <span>Encontrar Imóvel</span>
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}