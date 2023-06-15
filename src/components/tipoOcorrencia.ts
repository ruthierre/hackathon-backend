class TipoOcorrencia {
    private id: number;
    private titulo: string;
    private descricao: string;
  
    constructor(id: number, titulo: string, descricao: string) {
      this.id = id;
      this.titulo = titulo;
      this.descricao = descricao;
    }
  
    getId(): number {
      return this.id;
    }
  
    setId(id: number): void {
      this.id = id;
    }
  
    getTitulo(): string {
      return this.titulo;
    }
  
    setTitulo(titulo: string): void {
      this.titulo = titulo;
    }
  
    getDescricao(): string {
      return this.descricao;
    }
  
    setDescricao(descricao: string): void {
      this.descricao = descricao;
    }
  
    toString(): string {
      return `TipoOcorrencia: [ID: ${this.id}, Título: ${this.titulo}, Descrição: ${this.descricao}]`;
    }
  }
  
  export {TipoOcorrencia};