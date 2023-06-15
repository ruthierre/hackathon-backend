import { Setor } from "./setor";

class Departamento {
    private id: number;
    private direcao: Setor;
    private nome: string;
    private descricao: string;
  
    constructor(id: number, direcao: Setor, nome: string, descricao: string) {
      this.id = id;
      this.direcao = direcao;
      this.nome = nome;
      this.descricao = descricao;
    }
  
    getId(): number {
      return this.id;
    }
  
    setId(id: number): void {
      this.id = id;
    }
  
    getDirecao(): Setor {
      return this.direcao;
    }
  
    setDirecao(direcao: Setor): void {
      this.direcao = direcao;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    setNome(nome: string): void {
      this.nome = nome;
    }
  
    getDescricao(): string {
      return this.descricao;
    }
  
    setDescricao(descricao: string): void {
      this.descricao = descricao;
    }
  
    toString(): string {
      return `Setor: [ID: ${this.id}, Direcao: ${this.direcao.toString()}, Nome: ${this.nome}, Descricao: ${this.descricao}]`;
    }
  }
  
  export{Departamento};