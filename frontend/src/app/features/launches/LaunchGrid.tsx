import { Imovel } from "@/src/types/imovel";
import PropertyGrid from "../../components/common/PropertyGrid";

const HOST = process.env.HOST_LOCAL;

async function getLancamentos(): Promise<Imovel[]> {
    try {
        const res = await fetch(`http://${HOST}:5000/api/imoveis?classificacao=lancamento`, {
            cache: 'no-store'
        });

        if (!res.ok) throw new Error();

        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("🚨 Falha ao buscar lançamentos:", error);
        return []; 
    }
}

export default async function LaunchGrid() {
    const imoveis = await getLancamentos();

    return (
        <section id="lancamentos" className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-8 bg-linear-to-b from-amber-950/20 to-emerald-950/40 backdrop-blur-[2px]">

            <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="font-serif font-extralight text-4xl md:text-6xl text-white tracking-wide text-shadow-black text-shadow-sm">
                    Nossos <span className="font-medium text-orange-300">Lançamentos</span>
                </h2>
                <div className="w-24 h-0.5 bg-orange-200/60 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="w-full max-w-7xl mx-auto p-6 md:p-8 rounded-3xl bg-emerald-950/40 border border-orange-200/10 shadow-2xl backdrop-blur-md">

                {imoveis.length === 0 ? (
                    <p className="text-center text-gray-400 italic py-8">Nenhum lançamento disponível no momento.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
                        {imoveis.map((imovel) => (
                            <PropertyGrid key={imovel.id} imovel={imovel} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}