import { Funcionario } from "./funcionario";
import { Patrimonio } from "./patrimonio";
import { TipoOcorrencia } from "./tipoOcorrencia";

class Ocorrencia {
    private id: number;
    private tipo: TipoOcorrencia;
    private funcionario: Funcionario;
    private patrimonio: Patrimonio;
    private descricao: string;
    private status: string;
  
    constructor(id: number, tipo: TipoOcorrencia, funcionario: Funcionario, patrimonio: Patrimonio, descricao: string, status: string) {
      this.id = id;
      this.tipo = tipo;
      this.funcionario = funcionario;
      this.patrimonio = patrimonio;
      this.descricao = descricao;
      this.status = status;
    }
  
    getId(): number {
      return this.id;
    }
  
    setId(id: number): void {
      this.id = id;
    }
  
    getFuncionario(): Funcionario {
      return this.funcionario;
    }
  
    setFuncionario(funcionario: Funcionario): void {
      this.funcionario = funcionario;
    }
  
    getPatrimonio(): Patrimonio {
      return this.patrimonio;
    }
  
    setPatrimonio(patrimonio: Patrimonio): void {
      this.patrimonio = patrimonio;
    }
  
    getDescricao(): string {
      return this.descricao;
    }
  
    setDescricao(descricao: string): void {
      this.descricao = descricao;
    }
  
    getStatus(): string {
      return this.status;
    }
  
    setStatus(status: string): void {
      this.status = status;
    }
  
    getTipo(): TipoOcorrencia {
      return this.tipo;
    }
  
    setTipo(tipo: TipoOcorrencia): void {
      this.tipo = tipo;
    }
  
    toString(): string {
      return `Ocorrencia: [ID: ${this.id}, Tipo Ocorrência: ${this.tipo.toString()}, Funcionario: ${this.funcionario.toString()}, Patrimonio: ${this.patrimonio.toString()}, Descricao: ${this.descricao}, Status: ${this.status}]`;
    }
  }
  
  export {Ocorrencia};