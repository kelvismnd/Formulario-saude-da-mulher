export interface Paciente {
  id?:number;
  nome:string ;
  cpf:string;
  dataCadastro?:string | null;
  nomePai?: string | null;
  nomeMae?: string | null;
  estadoCivil?:string | null;
  conjugue?: string | null;
  dataNascimento: string;
  naturalidade:string;
  profissao?:string | null;
  telefone?: string | null;
  //falta mais itens do formulario, criar depois
}
