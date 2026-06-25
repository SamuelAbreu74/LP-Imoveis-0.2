export interface Imovel {
    id: number;
    id_campanha: number;
    id_tipo_imovel: number | null;
    tamanho_total_m2: string | number | null;
    area_construida_m2: string | number | null;
    comodos: Record<string, any> | null;
    descricao: string | null;
    valor_venda: string | number | null;
    valor_avaliacao_caixa: string | number | null;
    status: number | null;
    created_at: string | null;
    nome?: string | null;
    endereco?: string | null;
    url_photo?: string | null; 
}