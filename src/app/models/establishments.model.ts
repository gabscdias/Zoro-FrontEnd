export type Establishments = Establishment[];

export interface Establishment {
  id: string;
  razaoSocial: string;
  nomeFantasia?: string;
  cnpj: string;
  inscricaoEstadual?: string;
  inscricaoMunicipal?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  telefone?: string;
  email?: string;
  site?: string;
  idResponsavel: string;
  nomeResponsavel?: string;
  cpfResponsavel?: string;
  cargoResponsavel?: string;
  telefoneResponsavel?: string;
  emailResponsavel?: string;
  ramoAtividade?: string;
  dataFundacao?: Date;
  logotipo?: string;
  ativo?: boolean;
  dataInativacao?: Date;
}
