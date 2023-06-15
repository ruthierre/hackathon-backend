import { Funcionario } from "./funcionario";
import { Departamento } from "./departamento";

class Setor {
    private id: number;
    private departamento: Departamento;
    private chefe: Funcionario;
    private nome: string;
    private funcao: string;
  
    constructor(id: number, departamento: Departamento, chefe: Funcionario, nome: string, funcao: string) {
      this.id = id;
      this.departamento = departamento;
      this.chefe = chefe;
      this.nome = nome;
      this.funcao = funcao;
    }
  
    getId(): number {
      return this.id;
    }
  
    setId(id: number): void {
      this.id = id;
    }
  
    getDepartamentoId(): Departamento {
      return this.departamento;
    }
  
    setDepartamentoId(departamento: Departamento): void {
      this.departamento = departamento;
    }
  
    getChefeId(): Funcionario {
      return this.chefe;
    }
  
    setChefeId(chefe: Funcionario): void {
      this.chefe = chefe;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    setNome(nome: string): void {
      this.nome = nome;
    }
  
    getFuncao(): string {
      return this.funcao;
    }
  
    setFuncao(funcao: string): void {
      this.funcao = funcao;
    }
  
    toString(): string {
      return `Setor: [ID: ${this.id}, Departamento: ${this.departamento.toString()}, Chefe: ${this.chefe.toString()}, Nome: ${this.nome}, Função: ${this.funcao}]`;
    }
  }

  export {Setor};