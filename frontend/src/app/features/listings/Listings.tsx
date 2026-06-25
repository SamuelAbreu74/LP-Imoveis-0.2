import ListingsClient from "./ListingsClient";
import { Imovel } from "@/src/types/imovel";

const HOST = process.env.HOST_LOCAL;

async function getImoveisDestaque(): Promise<Imovel[]> {
    try {
        const res = await fetch(`http://${HOST}:5000/api/imoveis?classificacao=destaque`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Falha ao buscar Imóveis no servidor.');
        }

        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("🚨 Erro ao buscar imóveis em destaque:", error);
        return [];
    }
}

async function getCampanhas() {
    try {
        const res = await fetch(`http://${HOST}:5000/api/campanhas`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Falha ao buscar Campanhas no servidor.');
        }

        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("🚨 Erro ao buscar campanhas:", error);
        return [];
    }
}

export default async function Listings() {
    const imoveis = await getImoveisDestaque();
    const campanhas = await getCampanhas();

    return (
        <ListingsClient imoveis={imoveis} campanhas={campanhas} />
    );
}