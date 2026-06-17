'use client'
import { useState } from "react"

export default function Listings() {
    const [selectedId, setSelectedId] = useState<number>(1)

    const lista_imoveis = [
        {
            "id": 1,
            "nome": "Residencial Aurora",
            "localizacao": "Jardins, São Paulo - SP",
            "preco": 1250000.00,
            "detalhes": "3 Quartos (1 Suíte), 2 Banheiros",
            "vagas": 2,
            "tamanho": "110m²",
            "descricao": "Apartamento com acabamento de alto padrão e varanda gourmet.",
            "imagem": "https://picsum.photos/id/10/800/450"
        },
        {
            "id": 2,
            "nome": "Loft Industrial Soho",
            "localizacao": "Batel, Curitiba - PR",
            "preco": 680000.00,
            "detalhes": "1 Quarto Mezanino, 1 Banheiro",
            "vagas": 1,
            "tamanho": "55m²",
            "descricao": "Estilo nova-iorquino com pé direito duplo e janelas amplas.",
            "imagem": "https://picsum.photos/id/20/800/450"
        },
        {
            "id": 6,
            "nome": "Penthouse Sky View",
            "localizacao": "Itaim Bibi, São Paulo - SP",
            "preco": 8900000.00,
            "distribuicao": { "quartos": 4, "suites": 4, "banheiros": 6, "vagas": 5 },
            "tamanho_m2": 380,
            "descricao": "Cobertura duplex com piscina privativa, vista 360º da cidade e automação residencial completa.",
            "imagem": "https://picsum.photos/id/60/800/450",
            "tags": ["Luxo", "Piscina", "Vista Panorâmica"]
        },
        {
            "id": 7,
            "nome": "Refúgio da Serra",
            "localizacao": "Gramado - RS",
            "preco": 1450000.00,
            "distribuicao": { "quartos": 3, "suites": 1, "banheiros": 2, "vagas": 2 },
            "tamanho_m2": 180,
            "descricao": "Casa de madeira de alto padrão com lareira, calefação instalada e jardim de inverno.",
            "imagem": "https://picsum.photos/id/70/800/450",
            "tags": ["Serra", "Lareira", "Aconchegante"]
        },
        {
            "id": 8,
            "nome": "Smart Studio Life",
            "localizacao": "Savassi, Belo Horizonte - MG",
            "preco": 420000.00,
            "distribuicao": { "quartos": 1, "suites": 0, "banheiros": 1, "vagas": 0 },
            "tamanho_m2": 28,
            "descricao": "Studio funcional mobiliado, ideal para investimento ou nômades digitais. Prédio com coworking e lavanderia.",
            "imagem": "https://picsum.photos/id/80/800/450",
            "tags": ["Investimento", "Compacto", "Centro"]
        },
        {
            "id": 9,
            "nome": "Villa Mediterrânea",
            "localizacao": "Búzios - RJ",
            "preco": 3200000.00,
            "distribuicao": { "quartos": 4, "suites": 4, "banheiros": 5, "vagas": 3 },
            "tamanho_m2": 250,
            "descricao": "Casa em condomínio fechado com pé na areia, varandas amplas e acabamento em pedras naturais.",
            "imagem": "https://picsum.photos/id/90/800/450",
            "tags": ["Praia", "Exclusividade", "Pé na areia"]
        },
        {
            "id": 10,
            "nome": "Eco House Sustentável",
            "localizacao": "Lago Norte, Brasília - DF",
            "preco": 2100000.00,
            "distribuicao": { "quartos": 3, "suites": 2, "banheiros": 3, "vagas": 3 },
            "tamanho_m2": 310,
            "descricao": "Projeto arquitetônico focado em sustentabilidade, com painéis solares e reuso de água da chuva.",
            "imagem": "https://picsum.photos/id/100/800/450",
            "tags": ["Sustentável", "Moderno", "Espaçoso"]
        }
    ]

    const imovelSelecionado = lista_imoveis.find(imovel => imovel.id === selectedId)

    // Helpers consistentes para normalizar os dados do mock
    const getQuartos = (imovel: any) => {
        if (imovel?.distribuicao?.quartos !== undefined) return imovel.distribuicao.quartos
        if (imovel?.detalhes) return imovel.detalhes.split(' ')[0]
        return null
    }

    const getVagas = (imovel: any) => {
        if (imovel?.vagas !== undefined) return imovel.vagas
        if (imovel?.distribuicao?.vagas !== undefined) return imovel.distribuicao.vagas
        return 0
    }

    return (
        <section id="destaques" className="w-full min-h-screen flex flex-col justify-center  items-center py-16 px-4 md:px-8 bg-linear-to-b from-emerald-950/40 to-amber-950/20 backdrop-blur-[2px]">
            <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="font-serif font-extralight text-4xl md:text-6xl text-white tracking-wide text-shadow-black text-shadow-sm">
                    Nossos <span className="font-medium text-orange-300">Destaques</span> 
                </h2>
                <div className="w-24 h-0.5 bg-orange-200/60 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-3xl bg-emerald-950/40 border border-orange-200/10 shadow-2xl backdrop-blur-md overflow-hidden min-h-170">

                {/* LADO ESQUERDO: LISTA DE IMÓVEIS (Ajustado tamanho e scroll em telas menores) */}
                <div className="w-full md:w-80 bg-emerald-950/80 border-b md:border-b-0 md:border-r border-orange-200/5 flex flex-col">
                    <div className="p-4 border-b border-orange-200/5">
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-300/60">Imóveis Disponíveis</span>
                    </div>
                    <div className="flex-1 overflow-y-auto max-h-75 md:max-h-155 p-4 flex flex-col gap-3 scrollbar-thin scrollbar-thumb-emerald-800">
                        {lista_imoveis.map((imovel) => (
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
                                <h3 className="font-semibold text-base leading-tight tracking-wide">{imovel.nome}</h3>
                                <p className="text-xs opacity-70 line-clamp-1">{imovel.localizacao}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* LADO DIREITO: DETALHES (Invertido para Dark Premium de Alto Contraste) */}
                <div className="flex-1 p-6 md:p-10 text-white flex flex-col justify-between">
                    {imovelSelecionado ? (
                        <div className="flex flex-col gap-6 animate-fade-in">

                            {/* Imagem com Aspect Ratio elegante */}
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl border border-white/5">
                                <img
                                    src={imovelSelecionado.imagem}
                                    alt={imovelSelecionado.nome}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                {/* Tags Flutuantes se existirem */}
                                {imovelSelecionado.tags && (
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {imovelSelecionado.tags.map((tag, i) => (
                                            <span key={i} className="bg-emerald-950/80 text-orange-200 text-xs font-medium px-2.5 py-1 rounded-md backdrop-blur-sm border border-orange-200/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Cabeçalho de Informações Principais */}
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wide text-white">
                                        {imovelSelecionado.nome}
                                    </h2>
                                    <p className="text-orange-200/70 text-sm mt-1">{imovelSelecionado.localizacao}</p>
                                </div>
                                <div className="text-left sm:text-right">
                                    <span className="block text-xs uppercase tracking-wider text-orange-300/60 font-bold">Valor</span>
                                    <p className="text-2xl md:text-3xl font-medium text-orange-300">
                                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovelSelecionado.preco)}
                                    </p>
                                </div>
                            </div>

                            {/* GRID DE ESPECIFICAÇÕES TÉCNICAS */}
                            <div className="grid grid-cols-3 gap-2 border-y border-orange-200/10 py-5 my-2">
                                <div className="text-center">
                                    <span className="block text-xs text-orange-300/60 font-bold uppercase tracking-wider mb-1">Área</span>
                                    <span className="text-lg font-light">{"tamanho" in imovelSelecionado ? imovelSelecionado.tamanho : `${imovelSelecionado.tamanho_m2}m²`}</span>
                                </div>

                                <div className="text-center border-x border-orange-200/10">
                                    <span className="block text-xs text-orange-300/60 font-bold uppercase tracking-wider mb-1">Vagas</span>
                                    <span className="text-lg font-light">{getVagas(imovelSelecionado) || '—'}</span>
                                </div>

                                <div className="text-center">
                                    <span className="block text-xs text-orange-300/60 font-bold uppercase tracking-wider mb-1">Quartos</span>
                                    <span className="text-lg font-light">{getQuartos(imovelSelecionado) || '—'}</span>
                                </div>
                            </div>

                            {/* Bloco de Descrição */}
                            <div className="bg-emerald-950/20 p-4 rounded-xl border border-orange-200/5">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-300/70 mb-2">Sobre o Imóvel</h4>
                                <p className="text-gray-300 leading-relaxed font-light text-base">
                                    {imovelSelecionado.descricao}
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