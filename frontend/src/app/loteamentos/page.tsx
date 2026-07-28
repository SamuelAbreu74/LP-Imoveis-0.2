import { LoteamentoDTO } from '@/src/types/loteamento';
import Link from 'next/link';

const API_URL = process.env.NEXT_PRIVATE_API_URL;

export const dynamic = 'force-dynamic';

async function getLoteamentos(): Promise<LoteamentoDTO[]> {
  try {
    const res = await fetch(`${API_URL}/api/public/loteamentos`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Erro ao buscar loteamentos');
    return res.json();
  } catch (error) {
    console.error('Erro ao buscar loteamentos:', error);
    return [];
  }
}

export default async function LoteamentosPage() {
  const loteamentos = await getLoteamentos();

  return (
    <main className="min-h-screen bg-emerald-950 text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif text-orange-300 mb-4">Loteamentos</h1>
        <p className="text-gray-400 mb-10 text-sm">
          Conheça nossos loteamentos e encontre o imóvel ideal para você.
        </p>

        {loteamentos.length === 0 ? (
          <div className="text-center py-16 bg-emerald-900/20 border border-orange-200/10 rounded-3xl">
            <p className="text-gray-400">Nenhum loteamento cadastrado no momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loteamentos.map((lote) => (
              <div
                key={lote.id}
                className="group bg-emerald-900/40 border border-orange-200/10 rounded-2xl p-6 hover:border-orange-200/30 transition-all hover:bg-emerald-900/60"
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors">
                    {lote.nome_loteamento || 'Loteamento sem nome'}
                  </h2>
                  <span className="text-xs bg-orange-300/10 text-orange-300 px-3 py-1 rounded-full border border-orange-300/20">
                    {lote.quantidade_unidades || 0} unid.
                  </span>
                </div>

                <div className="mt-3 space-y-1 text-sm text-gray-400">
                  {lote.bairro && <p>📍 {lote.bairro}</p>}
                  {(lote.cidade || lote.uf) && (
                    <p>
                      {lote.cidade && lote.cidade}
                      {lote.cidade && lote.uf && ' - '}
                      {lote.uf && lote.uf}
                    </p>
                  )}
                  {lote.logradouro && (
                    <p className="text-xs text-gray-500">
                      {lote.logradouro} {lote.numero && `, ${lote.numero}`}
                    </p>
                  )}
                </div>

                <Link
                  href={`/loteamentos/${lote.id}`}
                  className="inline-block mt-5 bg-orange-200 hover:bg-orange-300 text-emerald-950 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-widest transition-all hover:shadow-lg hover:shadow-orange-950/50"
                >
                  Ver imóveis
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}