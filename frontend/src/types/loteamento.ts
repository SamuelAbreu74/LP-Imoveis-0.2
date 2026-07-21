export interface Loteamento {
    id: number;
    nome_loteamento: string | null;
    quantidade_unidades: number | null;
    logradouro: string | null;
    numero: string | null;
    bairro: string | null;
    cidade: string | null;
    uf: string | null;
    cep: string | null;
    created_at: string | null;
    id_tipo_loteamento: number | null;
}