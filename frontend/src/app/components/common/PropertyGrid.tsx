import image_grid from "../../public/imagem_imovel_grid.jpg"
import Image from "next/image"

export default function PropertyGrid() {
    return (
        <div className="group flex flex-col bg-emerald-900/20 hover:bg-emerald-950/60 rounded-2xl w-full overflow-hidden border border-orange-200/5 hover:border-orange-200/20 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">

            {/* Container da Imagem */}
            <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                    src={image_grid}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    alt="grid_photo"
                    placeholder="blur"
                    priority
                />
                <div className="absolute top-3 left-3 bg-emerald-950/80 text-orange-200 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-orange-200/10 backdrop-blur-sm">
                    Campanha 3
                </div>
            </div>

            {/* Corpo de Informações */}
            <div className="p-4 flex flex-col gap-1 text-white">
                <h3 className="text-lg font-semibold tracking-wide group-hover:text-orange-300 transition-colors line-clamp-1">
                    Nome do Imóvel Premium
                </h3>

                <p className="text-xs text-gray-400 flex items-center gap-1 line-clamp-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-orange-300/70">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Rua Exemplo, Bairro
                </p>

                <div className="w-full h-px bg-orange-200/10 my-1"></div>

                <div className="flex justify-between items-center mt-1">
                    <span className="text-xs uppercase text-orange-200/50 font-bold tracking-wider">Valor</span>
                    <p className="text-base font-medium text-orange-300 tracking-wide">
                        R$ 740.000
                    </p>
                </div>
            </div>
        </div>
    );
}