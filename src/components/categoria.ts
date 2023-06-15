class Categoria {
    private _id: number;
    private _nome: string;
  
    constructor(id: number, nome: string) {
      this._id = id;
      this._nome = nome;
    }
  
    getId(): number {
      return this._id;
    }
  
    setId(id: number): void {
      this._id = id;
    }
  
    getNome(): string {
      return this._nome;
    }
  
    setNome(nome: string): void {
      this._nome = nome;
    }
  
    toString(): string {
      return `Categoria: [ID: ${this._id}, Nome: ${this._nome}]`;
    }
  }

  export {Categoria};