import { Categoria } from "./categoria";
import { Setor } from "./setor";

class Patrimonio {
    private id: number;
    private categoria: Categoria;
    private setor: Setor;
    private nome: string;
    private valor: number;
    private situacao: string;
  
    constructor(id: number, categoria: Categoria, setor: Setor, nome: string, valor: number, situacao: string) {
      this.id = id;
      this.categoria = categoria;
      this.setor = setor;
      this.nome = nome;
      this.valor = valor;
      this.situacao = situacao;
    }
  
    getId(): number {
      return this.id;
    }
  
    setId(id: number): void {
      this.id = id;
    }
  
    getCategoria(): Categoria {
      return this.categoria;
    }
  
    setCategoria(categoria: Categoria): void {
      this.categoria = categoria;
    }
  
    getSetor(): Setor {
      return this.setor;
    }
  
    setSetor(setor: Setor): void {
      this.setor = setor;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    setNome(nome: string): void {
      this.nome = nome;
    }
  
    getValor(): number {
      return this.valor;
    }
  
    setValor(valor: number): void {
      this.valor = valor;
    }
  
    getSituacao(): string {
      return this.situacao;
    }
  
    setSituacao(situacao: string): void {
      this.situacao = situacao;
    }
  
    toString(): string {
      return `Patrimonio: [ID: ${this.id}, Categoria: ${this.categoria.toString()}, Setor: ${this.setor.toString()}, Nome: ${this.nome}, Valor: ${this.valor}, Situação: ${this.situacao}]`;
    }
  }

  export {Patrimonio};