'use client'
import { Imovel } from "@/src/types/imovel"
import { Campanha } from "@/src/types/campanha"
import { useState } from "react"

interface ListingsClientProps {
    imoveis: Imovel[]
    campanhas: Campanha[]
}

export default function ListingsClient({ imoveis, campanhas }: ListingsClientProps) {
    const [selectedId, setSelectedId] = useState<number>(imoveis[0]?.id || 1)

    const campanhasMap = campanhas.reduce((acc, campanha) => {
        acc[campanha.id] = campanha.nome_campanha || '';
        return acc;
    }, {} as Record<number, string>);

    const statusMap: Record<number, string> = {
        1: 'Disponível',
        2: 'Vendido',
        3: 'Reservado'
    };
    const imovelSelecionado = imoveis.find(imovel => imovel.id === selectedId)

    return (
        <section id="destaques" className="w-full min-h-screen flex flex-col justify-center items-center py-16 px-4 md:px-8 bg-linear-to-b from-emerald-950/40 to-amber-950/20 backdrop-blur-[2px]">
            <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="font-serif font-extralight text-4xl md:text-6xl text-white tracking-wide text-shadow-black text-shadow-sm">
                    Nossos <span className="font-medium text-orange-300">Destaques</span>
                </h2>
                <div className="w-24 h-0.5 bg-orange-200/60 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-3xl bg-emerald-950/40 border border-orange-200/10 shadow-2xl backdrop-blur-md overflow-hidden min-h-170">

                {/* LADO ESQUERDO: LISTA DE IMÓVEIS */}
                <div className="w-full md:w-80 bg-emerald-950/80 border-b md:border-b-0 md:border-r border-orange-200/5 flex flex-col">
                    <div className="p-4 border-b border-orange-200/5">
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-300/60">Imóveis Disponíveis</span>
                    </div>
                    <div className="flex-1 overflow-y-auto max-h-75 md:max-h-155 p-4 flex flex-col gap-3 scrollbar-thin scrollbar-thumb-emerald-800">
                        {imoveis.map((imovel) => (
                            <button
                                key={imovel.id}
                                onClick={() => setSelectedId(imovel.id)}
                                className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex flex-col gap-1
                                    ${selectedId === imovel.id
                                        ? "bg-emerald-800/80 border-orange-300/40 text-white shadow-lg"
                                        : "bg-emerald-900/20 border-transparent text-gray-400 hover:bg-emerald-900/40 hover:text-white"
                                    }
                                `}
                            >
                                <h3 className="font-semibold text-base leading-tight tracking-wide">
                                    {imovel.id_tipo_imovel === 1 ? 'Casa' : 'Apartamento'} | {imovel.nome}
                                </h3>
                                <p className="text-xs opacity-70 line-clamp-1">
                                    {imovel.endereco || 'Endereço não informado'}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* LADO DIREITO: DETALHES */}
                <div className="flex-1 p-6 md:p-10 text-white flex flex-col justify-between">
                    {imovelSelecionado ? (
                        <div className="flex flex-col gap-6 animate-fade-in">
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl border border-white/5 bg-emerald-900/20 flex items-center justify-center">
                                {imovelSelecionado.url_foto ? (
                                    <img
                                        src={imovelSelecionado.url_foto}
                                        alt={`Foto principal de ${imovelSelecionado.nome || 'Imóvel'}`}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-2 text-gray-400/50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-sm italic">Sem foto disponível</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wide text-white">
                                        {imovelSelecionado.nome}
                                    </h2>
                                    {imovelSelecionado.endereco && (
                                        <p className="text-gray-400 text-xs flex items-center gap-1 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-orange-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {imovelSelecionado.endereco}
                                        </p>
                                    )}
                                    <p className="text-orange-200/70 text-sm mt-1.5">Campanha: {campanhasMap[imovelSelecionado.id_campanha] || 'Nenhuma campanha vinculada'}</p>
                                </div>
                                <div className="text-left sm:text-right">
                                    <span className="block text-xs uppercase tracking-wider text-orange-300/60 font-bold">Valor de Venda</span>
                                    <p className="text-2xl md:text-3xl font-medium text-orange-300">
                                        {imovelSelecionado.valor_venda ? `R$ ${Number(imovelSelecionado.valor_venda).toLocaleString('pt-BR')}` : 'Sob Consulta'}
                                    </p>
                                </div>
                            </div>

                            {imovelSelecionado.comodos && Object.keys(imovelSelecionado.comodos).length > 0 && (
                                <div className="flex flex-wrap gap-2 py-1">
                                    {Object.entries(imovelSelecionado.comodos).map(([chave, valor]) => (
                                        <span key={chave} className="text-xs bg-emerald-900/30 border border-orange-200/10 px-3 py-1 rounded-full text-orange-100/90 capitalize">
                                            {valor} {chave}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="grid grid-cols-3 gap-2 border-y border-orange-200/10 py-5 my-2">
                                <div className="text-center">
                                    <span className="block text-xs text-orange-300/60 font-bold uppercase tracking-wider mb-1">Área Total</span>
                                    <span className="text-lg font-light">
                                        {imovelSelecionado.tamanho_total_m2 ? `${imovelSelecionado.tamanho_total_m2}m²` : '—'}
                                    </span>
                                </div>
                                <div className="text-center border-x border-orange-200/10">
                                    <span className="block text-xs text-orange-300/60 font-bold uppercase tracking-wider mb-1">Área Const.</span>
                                    <span className="text-lg font-light">
                                        {imovelSelecionado.area_construida_m2 ? `${imovelSelecionado.area_construida_m2}m²` : '—'}
                                    </span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-xs text-orange-300/60 font-bold uppercase tracking-wider mb-1">Status</span>
                                    <span className="text-lg font-light">
                                        {statusMap[imovelSelecionado.status ?? -1] || 'Status Indefinido'}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-emerald-950/20 p-4 rounded-xl border border-orange-200/5">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-300/70 mb-2">Sobre o Imóvel</h4>
                                <p className="text-gray-300 leading-relaxed font-light text-base">
                                    {imovelSelecionado.descricao || "Nenhuma descrição fornecida para este imóvel."}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex h-full items-center justify-center italic text-gray-400/50">
                            Selecione um imóvel ao lado para ver os detalhes.
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}