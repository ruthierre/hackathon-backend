import { Setor } from "./setor";
import { Endereco } from "./endereco";

class Funcionario {
    private id: number;
    private setor: Setor;
    private nome: string;
    private email: string;
    private cpf: string;
    private dataNascimento: Date;
    private genero: string;
    private endereco: Endereco;
    private telefone: string;
    private cargo: string;
    private salario: number;
    private dataContratacao: Date;
    private estaAtivo: boolean;
  
    constructor(
      id: number,
      setor: Setor,
      nome: string,
      email: string,
      cpf: string,
      dataNascimento: Date,
      genero: string,
      endereco: Endereco,
      telefone: string,
      cargo: string,
      salario: number,
      dataContratacao: Date,
      estaAtivo: boolean
    ) {
      this.id = id;
      this.setor = setor;
      this.nome = nome;
      this.email = email;
      this.cpf = cpf;
      this.dataNascimento = dataNascimento;
      this.genero = genero;
      this.endereco = endereco;
      this.telefone = telefone;
      this.cargo = cargo;
      this.salario = salario;
      this.dataContratacao = dataContratacao;
      this.estaAtivo = estaAtivo;
    }
  
    getId(): number {
      return this.id;
    }
  
    setId(id: number): void {
      this.id = id;
    }
  
    getSetorId(): Setor {
      return this.setor;
    }
  
    setSetorId(setor: Setor): void {
      this.setor = setor;
    }

    getNome(): string {
        return this.nome;
    }
    
    setNome(nome: string): void {
    this.nome = nome;
    }

    getEmail(): string {
    return this.email;
    }

    setEmail(email: string): void {
    this.email = email;
    }

    getCpf(): string {
    return this.cpf;
    }

    setCpf(cpf: string): void {
    this.cpf = cpf;
    }

    getDataNascimento(): Date {
    return this.dataNascimento;
    }

    setDataNascimento(dataNascimento: Date): void {
    this.dataNascimento = dataNascimento;
    }

    getGenero(): string {
    return this.genero;
    }

    setGenero(genero: string): void {
    this.genero = genero;
    }

    getEndereco(): Endereco {
    return this.endereco;
    }

    setEndereco(endereco: Endereco): void {
    this.endereco = endereco;
    }

    getTelefone(): string {
    return this.telefone;
    }

    setTelefone(telefone: string): void {
    this.telefone = telefone;
    }

    getCargo(): string {
    return this.cargo;
    }

    setCargo(cargo: string): void {
    this.cargo = cargo;
    }

    getSalario(): number {
    return this.salario;
    }

    setSalario(salario: number): void {
    this.salario = salario;
    }

    getDataContratacao(): Date {
    return this.dataContratacao;
    }

    setDataContratacao(dataContratacao: Date): void {
    this.dataContratacao = dataContratacao;
    }

    getEstaAtivo(): boolean {
    return this.estaAtivo;
    }

    setEstaAtivo(estaAtivo: boolean): void {
    this.estaAtivo = estaAtivo;
    }
  
    toString(): string {
        return `Funcionario: [ID: ${this.id}, Setor: ${this.setor.toString()}, Nome: ${this.nome}, Email: ${this.email}, CPF: ${this.cpf}, Data de Nascimento: ${this.dataNascimento}, Gênero: ${this.genero}, Endereço: ${this.endereco.toString()}, Telefone: ${this.telefone}, Cargo: ${this.cargo}, Salário: ${this.salario}, Data de Contratação: ${this.dataContratacao}, Ativo: ${this.estaAtivo}]`;
    }
}

export {Funcionario};