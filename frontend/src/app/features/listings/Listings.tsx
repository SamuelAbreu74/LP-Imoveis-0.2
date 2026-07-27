import ListingsClient from "./ListingsClient";
import { ImovelDTO } from "@/src/types/imovel";

const HOST = process.env.NEXT_PUBLIC_API_URL;

async function getImoveisDestaque(): Promise<ImovelDTO[]> {
    try {
        const res = await fetch(`${HOST}/api/public/imoveis/?classificacao=destaque`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Falha ao buscar Imóveis no servidor.');
        }

        const json = await res.json();
        return Array.isArray(json) ? json : (json.data || []);
    } catch (error) {
        console.error("Erro ao buscar imóveis em destaque:", error);
        return [];
    }
}

// async function getCampanhas() {
//     try {
//         const res = await fetch(`http://${HOST}:5000/api/campanhas`, {
//             cache: 'no-store'
//         });

//         if (!res.ok) {
//             throw new Error('Falha ao buscar Campanhas no servidor.');
//         }

//         const json = await res.json();
//         return json.data || [];
//     } catch (error) {
//         console.error("Erro ao buscar campanhas:", error);
//         return [];
//     }
// }

export default async function Listings() {
    const imoveis = await getImoveisDestaque();
    // const campanhas = await getCampanhas();

    return (
        <ListingsClient imoveis={imoveis}  />
    );
}