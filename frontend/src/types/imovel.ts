export interface Imovel {
    id: number;
    id_campanha: number;
    id_tipo_imovel: number | null;
    tamanho_total_m2: number | null;
    area_construida_m2: number | null;
    comodos: Record<string, any> | null;
    descricao: string | null;
    valor_venda: number | null;
    valor_avaliacao_caixa: number | null;
    status: number | null;
    created_at: string | null;
}