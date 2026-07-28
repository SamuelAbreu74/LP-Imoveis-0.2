import { LoteamentoDTO } from '@/src/types/loteamento';
import { ImovelDTO } from '@/src/types/imovel';
import Link from 'next/link';
import Image from 'next/image';

const API_URL = process.env.NEXT_PRIVATE_API_URL;

export const dynamic = 'force-dynamic';

async function getLoteamento(id: string): Promise<LoteamentoDTO | null> {
  try {
    const res = await fetch(`${API_URL}/api/public/loteamentos/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Erro ao buscar loteamento:', error);
    return null;
  }
}

export default async function LoteamentoDetalhesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const loteamento = await getLoteamento(id);

  if (!loteamento) {
    return (
      <main className="min-h-screen bg-emerald-950 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-orange-300">Loteamento não encontrado</h2>
          <Link
            href="/loteamentos"
            className="inline-block mt-6 bg-orange-200 text-emerald-950 px-6 py-3 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-orange-300 transition-all"
          >
            Voltar para loteamentos
          </Link>
        </div>
      </main>
    );
  }

  // Usa os imóveis que já vieram do include do backend
  const imoveis = loteamento.imoveis || [];

  return (
    <main className="min-h-screen bg-emerald-950 text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-10 border-b border-orange-200/10 pb-6">
          <Link
            href="/loteamentos"
            className="inline-flex items-center gap-2 text-sm text-orange-300/70 hover:text-orange-300 transition-colors mb-4"
          >
            ← Voltar para loteamentos
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-orange-300">
            {loteamento.nome_loteamento || 'Loteamento sem nome'}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-gray-400 text-sm">
            {loteamento.logradouro && (
              <span>{loteamento.logradouro} {loteamento.numero && `, ${loteamento.numero}`}</span>
            )}
            {loteamento.bairro && <span>Bairro: {loteamento.bairro}</span>}
            {loteamento.cidade && <span>{loteamento.cidade} - {loteamento.uf}</span>}
            {loteamento.quantidade_unidades && (
              <span className="bg-orange-300/10 text-orange-300 px-3 py-1 rounded-full text-xs border border-orange-300/20">
                {loteamento.quantidade_unidades} unidades
              </span>
            )}
          </div>
        </div>

        {/* Lista de Imóveis */}
        <h2 className="text-2xl font-semibold mb-6">Imóveis deste loteamento</h2>

        {imoveis.length === 0 ? (
          <div className="bg-emerald-900/20 border border-orange-200/10 rounded-2xl p-8 text-center text-gray-400">
            <p>Nenhum imóvel cadastrado para este loteamento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imoveis.map((imovel: ImovelDTO, index: number) => {
              const fotoCapa = imovel.fotos && imovel.fotos.length > 0
                ? imovel.fotos[0].url_foto
                : imovel.url_foto;

              return (
                <Link
                  key={imovel.id} // <-- CHAVE AQUI (elemento mais externo)
                  href={`/imoveis/${imovel.id}`}
                  className="group bg-emerald-900/40 border border-orange-200/10 rounded-2xl overflow-hidden hover:border-orange-200/30 transition-all hover:bg-emerald-900/60"
                >
                  <div className="relative h-48 w-full bg-emerald-800 overflow-hidden">
                    {fotoCapa ? (
                      <Image
                        src={fotoCapa}
                        alt={imovel.nome || 'Imóvel'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized={fotoCapa.startsWith('http')}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                        Sem imagem
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-white group-hover:text-orange-300 transition-colors line-clamp-1">
                      {imovel.nome || 'Imóvel sem título'}
                    </h3>
                    {imovel.endereco && (
                      <p className="text-xs text-gray-400 mt-1 line-clamp-1">{imovel.endereco}</p>
                    )}
                    <p className="text-orange-300 font-bold mt-2">
                      {imovel.valor_venda
                        ? `R$ ${Number(imovel.valor_venda).toLocaleString('pt-BR')}`
                        : 'Sob consulta'}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}