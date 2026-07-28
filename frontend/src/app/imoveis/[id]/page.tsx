import { ImovelDTO } from "@/src/types/imovel";
import Image from "next/image";
import WhatsAppButton from "../../components/common/WhatsappButton";

const HOST = process.env.NEXT_PRIVATE_API_URL;

interface ImovelPageProps {
    params: Promise<{
        id: string;
    }>;
}

export const dynamic = 'force-dynamic';

// Busca os detalhes do imóvel 
async function getImovelDetalhes(id: string): Promise<ImovelDTO | null> {
    try {
        const res = await fetch(`${HOST}/api/public/imoveis/${id}`, {
            cache: 'no-store'
        });

        if (!res.ok) return null;
        return await res.json();
    } catch (error) {
        console.error(`Falha ao buscar detalhes do imóvel ${id}:`, error);
        return null;
    }
}

export default async function ImovelDetalhesPage({ params }: ImovelPageProps) {
    const { id } = await params;
    const imovel = await getImovelDetalhes(id);

    if (!imovel) {
        return (
            <div className="min-h-screen bg-emerald-950 flex flex-col justify-center items-center text-white">
                <h1 className="text-2xl font-serif text-orange-300">Ops! Imóvel não encontrado.</h1>
                <p className="text-gray-400 mt-2">O código {id} não corresponde a nenhum imóvel ativo.</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-linear-to-b from-emerald-950 to-stone-950 text-white py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Cabeçalho */}
                <div>
                    <h1 className="font-serif text-3xl md:text-5xl text-orange-300">{imovel.nome}</h1>
                    <p className="text-gray-400 text-sm mt-2">{imovel.endereco}</p>
                </div>

                {/* Detalhes de Texto e Preço */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                    <div className="md:col-span-2 space-y-3">
                        <h2 className="text-2xl font-medium text-orange-200">Sobre o imóvel</h2>
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line">{imovel.descricao}</p>
                    </div>
                    <div className="p-2 rounded-2xl bg-orange-300/10 border border-orange-300/20 flex flex-col justify-center items-center h-fit">
                        {/* <span className="text-xs uppercase text-orange-200/70 font-bold tracking-widest mb-1">Valor de Venda</span>
                        <p className="text-3xl font-serif text-orange-300">
                            {imovel.valor_venda ? `R$ ${Number(imovel.valor_venda).toLocaleString('pt-BR')}` : 'Sob Consulta'}
                        </p> */}
                        <WhatsAppButton
                            imovelNome={imovel.nome || "Imóvel"}
                            imovelEndereco={imovel.endereco || "endereco"}
                            imovelValor={String(imovel.valor_venda || "")}
                        />
                    </div>
                </div>
                
                {/* Ficha Técnica / Cômodos */}
                <div className="p-6 rounded-2xl bg-emerald-900/10 border border-orange-200/5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <span className="block text-xs text-orange-200/60 uppercase tracking-wider">Quartos</span>
                        <span className="text-xl font-semibold text-white">{imovel.comodos?.quartos || 0}</span>
                    </div>
                    <div>
                        <span className="block text-xs text-orange-200/60 uppercase tracking-wider">Banheiros</span>
                        <span className="text-xl font-semibold text-white">{imovel.comodos?.banheiros || 0}</span>
                    </div>
                    <div>
                        <span className="block text-xs text-orange-200/60 uppercase tracking-wider">Vagas</span>
                        <span className="text-xl font-semibold text-white">{imovel.comodos?.vagas_garagem || 0}</span>
                    </div>
                    <div>
                        <span className="block text-xs text-orange-200/60 uppercase tracking-wider">Área Total</span>
                        <span className="text-xl font-semibold text-white">{imovel.tamanho_total_m2} m²</span>
                    </div>
                </div>


                {/* Galeria de Fotos */}
                <h1 className="text-3xl font-medium text-orange-200 ">Galeria de Fotos</h1>
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {imovel.fotos && imovel.fotos.length > 0 ? (
                        imovel.fotos.map((foto) => (
                            <div key={foto.id} className="relative aspect-4/3 rounded-xl overflow-hidden bg-emerald-900/20 border border-orange-200/10">
                                <Image
                                    src={foto.url_foto}
                                    fill
                                    className="object-cover"
                                    alt="Foto do imóvel"
                                    unoptimized
                                />
                            </div>
                        ))
                    ) : imovel.url_foto ? (
                        // Fallback caso a galeria nova esteja vazia, exibe a foto padrão antiga
                        <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-emerald-900/20 border border-orange-200/10">
                            <Image src={imovel.url_foto} fill className="object-cover" alt="Foto principal" unoptimized />
                        </div>
                    ) : null}
                </div>






            </div>
        </main>
    );
}