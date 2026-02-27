'use client'
import { useState } from "react"

export default function Listings() {

    const [selectedId, setSelectedId] = useState<number>(1)

    const lista_imoveis =
        [
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
                "distribuicao": {
                    "quartos": 4,
                    "suites": 4,
                    "banheiros": 6,
                    "vagas": 5
                },
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
                "distribuicao": {
                    "quartos": 3,
                    "suites": 1,
                    "banheiros": 2,
                    "vagas": 2
                },
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
                "distribuicao": {
                    "quartos": 1,
                    "suites": 0,
                    "banheiros": 1,
                    "vagas": 0
                },
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
                "distribuicao": {
                    "quartos": 4,
                    "suites": 4,
                    "banheiros": 5,
                    "vagas": 3
                },
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
                "distribuicao": {
                    "quartos": 3,
                    "suites": 2,
                    "banheiros": 3,
                    "vagas": 3
                },
                "tamanho_m2": 310,
                "descricao": "Projeto arquitetônico focado em sustentabilidade, com painéis solares e reuso de água da chuva.",
                "imagem": "https://picsum.photos/id/100/800/450",
                "tags": ["Sustentável", "Moderno", "Espaçoso"]
            }
        ]
        const imovelSelecionado = lista_imoveis.find(imovel => imovel.id === selectedId)
    
        const getQuartos = (imovel: any) => {
            if (typeof imovel.distribuicao === 'object') return imovel.distribuicao.quartos;
            if (imovel.detalhes) return imovel.detalhes.split(' ')[0];
            return null;
        }


    return (
        <section className="flex flex-col justify-center items-center bg-orange-950/30 px-15 py-5 min-h-screen text-orange-950 animate-fade-in-up ">
            <h1 className="font-extralight font-serif text-5xl mb-8 text-white">Lançamentos</h1>

            <div className="flex flex-row w-full max-w-6xl rounded-3xl bg-orange-200/80 shadow-2xl overflow-hidden items-stretch">
                
                {/* LADO VERDE: LISTA DE IMOVEIS*/}
                <div className="relative w-87.5 bg-emerald-950 shrink-0">
                    <div className="absolute inset-0 flex flex-col gap-4 p-4 overflow-y-auto custom-scrollbar">
                        {lista_imoveis.map((imovel) => (
                            <div
                                key={imovel.id}
                                onClick={() => setSelectedId(imovel.id)}
                                className={`shrink-0 p-5 rounded-2xl cursor-pointer transition-all border-2
                                    ${selectedId === imovel.id 
                                        ? "bg-emerald-800 border-emerald-400 text-white" 
                                        : "bg-emerald-900/50 border-transparent text-emerald-100/60 hover:bg-emerald-900"
                                    }
                                `}
                            >
                                <h3 className="font-bold text-xl leading-tight">{imovel.nome}</h3>
                                <p className="text-sm line-clamp-1">{imovel.localizacao}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* LADO LARANJA: DESCRIÇAO*/}
                <div className="flex-1 p-10 h-full">
                    {imovelSelecionado ? (
                        <div className="flex flex-col gap-6">
                            <img 
                                src={imovelSelecionado.imagem} 
                                alt={imovelSelecionado.nome}
                                className="w-full h-80 object-cover rounded-2xl shadow-md"
                            />

                            <div className="flex justify-between items-end">
                                <div>
                                    <h2 className="text-4xl font-bold">{imovelSelecionado.nome}</h2>
                                    <p className="text-orange-800 text-lg">{imovelSelecionado.localizacao}</p>
                                </div>
                                <p className="text-3xl font-black text-emerald-900">
                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovelSelecionado.preco)}
                                </p>
                            </div>

                            {/* GRID DE INFORMAÇÕES CONDICIONAL */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-y border-orange-300 py-6">
                                {/* Área */}
                                <div className="text-center">
                                    <span className="block text-sm text-orange-700 font-bold uppercase">Área</span>
                                    <span className="text-xl">{imovelSelecionado.tamanho || `${imovelSelecionado.tamanho_m2}m²`}</span>
                                </div>

                                {/* Vagas */}
                                {imovelSelecionado.vagas !== undefined && imovelSelecionado.vagas !== null && imovelSelecionado.vagas > 0 && (
                                    <div className="text-center border-x border-orange-300">
                                        <span className="block text-sm text-orange-700 font-bold uppercase">Vagas</span>
                                        <span className="text-xl">{imovelSelecionado.vagas}</span>
                                    </div>
                                )}

                                {/* Quartos */}
                                {getQuartos(imovelSelecionado) && (
                                    <div className="text-center border-orange-300">
                                        <span className="block text-sm text-orange-700 font-bold uppercase ">Quartos</span>
                                        <span className="text-xl">{getQuartos(imovelSelecionado)}</span>
                                    </div>
                                )}
                            </div>

                            <div>
                                <h4 className="font-bold mb-2">Descrição</h4>
                                <p className="text-orange-900 leading-relaxed text-lg italic ">{`"${imovelSelecionado.descricao}"`}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex min-h-125 items-center justify-center italic opacity-50">
                            Selecione um imóvel
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}