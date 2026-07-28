import Link from "next/link"
import { Key } from "react";

interface PageProps {
    searchParams: Promise<{
        tipo?: string;
        localizacao?: string;
        valorMinimo?: string;
        valorMaximo?: string;
    }>
}

export const dynamic = 'force-dynamic';

export async function getImoveisFiltrados(filters: {
    tipo?: string;
    localizacao?: string;
    valorMinimo?: string;
    valorMaximo?: string;
}) {
    try {
        const queryParams = new URLSearchParams();
        const HOST = process.env.NEXT_PRIVATE_API_URL

        if (filters.tipo) queryParams.set("tipo", filters.tipo);
        if (filters.localizacao) queryParams.set("localizacao", filters.localizacao);
        // if (filters.valorMinimo) queryParams.set("valorMinimo", filters.valorMinimo);
        // if (filters.valorMaximo) queryParams.set("valorMaximo", filters.valorMaximo);

        const queryString = queryParams.toString();

        const url = queryString
            ? `${HOST}/api/public/imoveis?${queryString}`
            : `${HOST}/api/public/imoveis`;

        const response = await fetch(url, {
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar imóveis filtrados.");
        }

        return await response.json();
    } catch (error) {
        console.error("Erro na busca:", error);
        return [];
    }
}

export default async function ImoveisPage({ searchParams }: PageProps) {
    const filters = await searchParams;
    const imoveis = await getImoveisFiltrados(filters) || [];

    return (
        <main className="min-h-screen bg-emerald-950 text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Cabeçalho da Página de Resultados */}
                <div className="mb-10 border-b border-orange-200/10 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif mt-1">Resultados da Busca</h1>
                    </div>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-950 bg-orange-200 hover:bg-orange-300 px-5 py-3 rounded-xl transition-all self-start"
                    >
                        Nova Busca
                    </Link>
                </div>

                {imoveis.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {imoveis.map((imovel: any) => {
                            // Define a imagem principal com segurança
                            const fotoUrl = imovel.fotos && imovel.fotos.length > 0
                                ? (imovel.fotos.find((f: any) => f.destaque)?.url || imovel.fotos[0]?.url)
                                : imovel.url_foto;

                            return (
                                <div key={imovel.id} className="group bg-emerald-900/40 border border-orange-200/10 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
                                    <div>
                                        {/* Container da Imagem com restrição de altura e overflow escondido */}
                                        <div className="relative h-48 w-full bg-emerald-950 overflow-hidden">
                                            {fotoUrl ? (
                                                <img
                                                    src={fotoUrl}
                                                    alt={imovel.nome || 'Imóvel'}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-emerald-700 text-xs uppercase tracking-widest">
                                                    Sem imagem
                                                </div>
                                            )}

                                            {/* Tag de Tipo do Imóvel */}
                                            <span className="absolute top-3 right-3 bg-emerald-950/80 backdrop-blur-md text-orange-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-orange-200/20 z-10">
                                                {imovel.tipo || 'Imóvel'}
                                            </span>
                                        </div>

                                        {/* Informações textuais */}
                                        <div className="p-5 space-y-2">
                                            <h3 className="text-lg font-serif text-white font-medium line-clamp-1">{imovel.nome}</h3>
                                            <p className="text-gray-300 text-xs line-clamp-1">{imovel.endereco || 'Localização não informada'}</p>
                                            <p className="text-orange-300 font-bold text-base mt-2">
                                                {imovel.valor_venda
                                                    ? `R$ ${Number(imovel.valor_venda).toLocaleString('pt-BR')}`
                                                    : 'Sob Consulta'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-5 pt-0">
                                        <Link
                                            href={`/imoveis/${imovel.id}`}
                                            className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition-all text-center block border border-orange-200/10"
                                        >
                                            Ver Detalhes
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-emerald-900/20 border border-orange-200/10 rounded-3xl backdrop-blur-sm p-8">
                        <div className="w-16 h-16 bg-orange-200/10 text-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-2">Nenhum imóvel encontrado</h3>
                        <p className="text-gray-300 text-sm max-w-md mx-auto mb-8">
                            Não encontramos imóveis correspondentes aos filtros selecionados. Tente ajustar os parâmetros ou fazer uma nova busca.
                        </p>
                        <Link
                            href="/"
                            className="bg-orange-200 hover:bg-orange-300 text-emerald-950 font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all inline-block"
                        >
                            Voltar para a Página Inicial
                        </Link>
                    </div>
                )}

            </div>
        </main>
    )
}