export type Establishments = Establishment[];

export interface Establishment {
  id: string,
  nomeFantasia?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  telefone?: string;
  email?: string;
  site?: string;
  dataFundacao?: Date;
  logotipo?: string;
  ativo?: boolean;
}
