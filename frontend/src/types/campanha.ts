export interface Campanha {
    id: number;
    nome_campanha: string | null;
    quantidade_unidades: number | null;
    logradouro: string | null;
    numero: string | null;
    bairro: string | null;
    cidade: string | null;
    uf: string | null;
    cep: string | null;
    created_at: string | null;
    id_tipo_campanha: number | null;
}