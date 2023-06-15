class Endereco {
    private id: number;
    private logradouro: string;
    private numero: string;
    private cidade: string;
    private estado: string;
    private cep: string;
  
    constructor(
      id: number, logradouro: string, numero: string, cidade: string, estado: string, cep: string) {
      this.id = id;
      this.logradouro = logradouro;
      this.numero = numero;
      this.cidade = cidade;
      this.estado = estado;
      this.cep = cep;
    }
  
    getId(): number {
      return this.id;
    }
  
    setId(id: number): void {
      this.id = id;
    }
  
    getLogradouro(): string {
      return this.logradouro;
    }
  
    setLogradouro(logradouro: string): void {
      this.logradouro = logradouro;
    }
  
    getNumero(): string {
      return this.numero;
    }
  
    setNumero(numero: string): void {
      this.numero = numero;
    }
  
    getCidade(): string {
      return this.cidade;
    }
  
    setCidade(cidade: string): void {
      this.cidade = cidade;
    }
  
    getEstado(): string {
      return this.estado;
    }
  
    setEstado(estado: string): void {
      this.estado = estado;
    }
  
    getCep(): string {
      return this.cep;
    }
  
    setCep(cep: string): void {
      this.cep = cep;
    }
  
    toString(): string {
      return `Endereco: [ID: ${this.id}, Logradouro: ${this.logradouro}, Número: ${this.numero}, Cidade: ${this.cidade}, Estado: ${this.estado}, CEP: ${this.cep}]`;
    }
  }

  export {Endereco};