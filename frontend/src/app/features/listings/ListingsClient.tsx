'use client'
import { ImovelDTO } from "@/src/types/imovel"
import { useState } from "react"

interface ListingsClientProps {
    imoveis: ImovelDTO[]
}

export default function ListingsClient({ imoveis }: ListingsClientProps) {
    const [selectedId, setSelectedId] = useState<number>(imoveis[0]?.id || 1)

    const statusMap: Record<number, string> = {
        1: 'Disponível',
        2: 'Vendido',
        3: 'Reservado'
    };
    const imovelSelecionado = imoveis.find(imovel => imovel.id === selectedId)

    return (
        <section id="destaques" className="w-full min-h-screen flex flex-col justify-center items-center py-16 px-4 md:px-8 bg-linear-to-b from-emerald-950/40 to-amber-950/20 backdrop-blur-[2px]">
            {/* Cabeçalho */}
            <div className="text-center mb-12 animate-fade-in-up">  
                <h2 className="font-serif font-extralight text-3xl md:text-5xl text-white tracking-wide text-shadow-black text-shadow-sm">
                    Nossos <span className="font-medium text-orange-300">Destaques</span>
                </h2>
                <div className="w-24 h-0.5 bg-orange-200/60 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Container Principal */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-3xl bg-emerald-950/40 border border-orange-200/10 shadow-2xl backdrop-blur-md overflow-hidden min-h-168">
                {imoveis.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 text-center gap-4 animate-fade-in">
                        <div className="w-16 h-16 rounded-full bg-emerald-900/30 border border-orange-200/10 flex items-center justify-center text-orange-300/60 shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div className="max-w-md">
                            <h3 className="text-lg font-medium text-white mb-2">Nenhum imóvel em destaque</h3>
                            <p className="text-xs text-gray-400 leading-relaxed font-light">
                                No momento, não temos oportunidades cadastradas para esta listagem. Entre em contato com a nossa equipe para conhecer outras opções exclusivas da Valdo Imóveis!
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* LADO ESQUERDO: LISTA DE IMÓVEIS */}
                        <div className="w-full md:w-88 bg-emerald-950/80 border-b md:border-b-0 md:border-r border-orange-200/10 flex flex-col">
                            <div className="p-5 border-b border-orange-200/10">
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-300/80">Imóveis Disponíveis</span>
                            </div>
                            <div className="flex-1 overflow-y-auto max-h-80 md:max-h-full p-4 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-emerald-800">
                                {imoveis.map((imovel) => (
                                    <button
                                        key={imovel.id}
                                        onClick={() => setSelectedId(imovel.id)}
                                        className={`w-full text-left p-3 rounded-2xl transition-all duration-300 border flex items-center gap-3 group cursor-pointer
                                            ${selectedId === imovel.id
                                                ? "bg-emerald-800/60 border-orange-300/40 shadow-lg"
                                                : "bg-transparent border-transparent hover:bg-emerald-900/40 hover:border-orange-200/10"
                                            }
                                        `}
                                    >
                                        {/* Miniatura da Imagem na Lista */}
                                        <div className="w-12 h-12 shrink-0 rounded-xl overflow-hidden bg-emerald-900/50 border border-white/5 flex items-center justify-center">
                                            {imovel.url_foto ? (
                                                <img src={imovel.url_foto} alt={imovel.nome as any} className="w-full h-full object-cover" />
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            )}
                                        </div>

                                        <div className="flex flex-col flex-1 overflow-hidden">
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-orange-200/60 mb-0.5">
                                                {imovel.id_tipo_imovel === 1 ? 'Casa' : 'Apartamento'}
                                            </span>
                                            <h3 className={`font-medium text-[13px] md:text-sm leading-tight truncate ${selectedId === imovel.id ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                                                {imovel.nome}
                                            </h3>
                                            <p className="text-[11px] text-gray-500 truncate mt-1">
                                                {imovel.endereco || 'Endereço não informado'}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* LADO DIREITO: DETALHES & CARROSSEL */}
                        <div className="flex-1 p-6 md:p-8 text-white flex flex-col justify-between overflow-y-auto">
                            {imovelSelecionado ? (
                                <div className="flex flex-col gap-6 animate-fade-in">

                                    {/* MÓDULO DE CARROSSEL (Setup UI) */}
                                    <div className="relative group aspect-video w-full overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-emerald-950 flex items-center justify-center">
                                        {imovelSelecionado.url_foto ? (
                                            <img
                                                src={imovelSelecionado.url_foto}
                                                alt={`Foto de ${imovelSelecionado.nome || 'Imóvel'}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center gap-3 text-gray-400/50">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-xs italic tracking-wide">Sem fotos disponíveis</span>
                                            </div>
                                        )}

                                        {/* SETUP: Botões do Carrossel */}
                                        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <button className="pointer-events-auto p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 hover:bg-orange-300 hover:text-emerald-950 hover:scale-110 transition-all cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                                </svg>
                                            </button>
                                            <button className="pointer-events-auto p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 hover:bg-orange-300 hover:text-emerald-950 hover:scale-110 transition-all cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* SETUP: Indicadores (Dots) do Carrossel */}
                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                                            <span className="w-2 h-2 rounded-full bg-white shadow-lg transition-all cursor-pointer"></span>
                                            <span className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 shadow-lg transition-all cursor-pointer hover:scale-110"></span>
                                            <span className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 shadow-lg transition-all cursor-pointer hover:scale-110"></span>
                                        </div>
                                        <div className="absolute bottom-0 w-full h-20 bg-linear-to-t from-black/60 to-transparent pointer-events-none"></div>
                                    </div>

                                    {/* Cabeçalho de Informações */}
                                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5">
                                        <div>
                                            <h2 className="text-2xl md:text-4xl font-serif font-light tracking-wide text-white leading-tight">
                                                {imovelSelecionado.nome}
                                            </h2>
                                            {imovelSelecionado.endereco && (
                                                <p className="text-gray-400 text-xs md:text-sm flex items-center gap-1.5 mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {imovelSelecionado.endereco}
                                                </p>
                                            )}
                                        </div>
                                        <div className="text-left xl:text-right bg-emerald-900/30 xl:bg-transparent p-3 xl:p-0 rounded-2xl xl:rounded-none border border-orange-200/5 xl:border-none">
                                            <span className="block text-[10px] uppercase tracking-widest text-orange-200/60 font-bold mb-1">Valor do Investimento</span>
                                            <p className="text-2xl md:text-3xl font-medium text-orange-300">
                                                {imovelSelecionado.valor_venda ? `R$ ${Number(imovelSelecionado.valor_venda).toLocaleString('pt-BR')}` : 'Sob Consulta'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Grid de Atributos */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                                        <div className="bg-emerald-900/30 border border-orange-200/10 p-3 rounded-2xl flex flex-col justify-center items-center text-center">
                                            <span className="block text-[9px] text-orange-200/60 font-bold uppercase tracking-widest mb-1">Área Total</span>
                                            <span className="text-lg font-light text-white">{imovelSelecionado.tamanho_total_m2 ? `${imovelSelecionado.tamanho_total_m2}m²` : '—'}</span>
                                        </div>
                                        <div className="bg-emerald-900/30 border border-orange-200/10 p-3 rounded-2xl flex flex-col justify-center items-center text-center">
                                            <span className="block text-[9px] text-orange-200/60 font-bold uppercase tracking-widest mb-1">Área Útil</span>
                                            <span className="text-lg font-light text-white">{imovelSelecionado.area_construida_m2 ? `${imovelSelecionado.area_construida_m2}m²` : '—'}</span>
                                        </div>
                                        <div className="bg-emerald-900/30 border border-orange-200/10 p-3 rounded-2xl flex flex-col justify-center items-center text-center md:col-span-2">
                                            <span className="block text-[9px] text-orange-200/60 font-bold uppercase tracking-widest mb-1">Status Comercial</span>
                                            <span className="text-lg font-light text-white">{statusMap[imovelSelecionado.status ?? -1] || 'Status Indefinido'}</span>
                                        </div>
                                    </div>

                                    {/* Comodos */}
                                    {imovelSelecionado.comodos && Object.keys(imovelSelecionado.comodos).length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {Object.entries(imovelSelecionado.comodos).map(([chave, valor]) => (
                                                <span key={chave} className="text-[11px] md:text-xs bg-black/20 border border-orange-200/20 px-3 py-1.5 rounded-xl text-orange-100 tracking-wide capitalize flex items-center gap-1.5 shadow-sm">
                                                    <span className="font-bold text-orange-300">{valor}</span> {chave}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Descrição */}
                                    <div className="bg-transparent pt-3 border-t border-orange-200/10">
                                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-orange-300/80 mb-3">Sobre a Propriedade</h4>
                                        <p className="text-gray-300/90 leading-relaxed font-light text-xs md:text-sm text-justify">
                                            {imovelSelecionado.descricao || "Nenhuma descrição fornecida para este imóvel."}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex h-full items-center justify-center italic text-gray-400/50 text-sm">
                                    Selecione um imóvel ao lado para ver os detalhes.
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}