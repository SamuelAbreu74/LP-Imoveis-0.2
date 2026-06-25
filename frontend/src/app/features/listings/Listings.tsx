import ListingsClient from "./ListingsClient";
import { Imovel } from "@/src/types/imovel";

const HOST = process.env.HOST_LOCAL;

async function getImoveis(): Promise<Imovel[]> {
    const res = await fetch(`http://${HOST}:5000/api/imoveis`);

    if (!res.ok) {
        throw new Error('Falha ao buscar Imóveis no servidor.');
    }

    const json = await res.json();
    return json.data || [];
}

async function getCampanhas(){
    const res = await fetch(`http://${HOST}:5000/api/campanhas`)

    if(!res.ok){
        throw new Error('Falha ao buscas Campanhas no servidor.')
    }

    const json = await res.json();
    return json.data || [];
}

export default async function Listings() {
    const imoveis = await getImoveis();
    const campanhas = await getCampanhas();

    return (
        <ListingsClient imoveis={imoveis} campanhas={campanhas} />
    );
}