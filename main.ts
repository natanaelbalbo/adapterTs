interface RepositorioDePessoas {
  listarPessoas(): Pessoa[];
}

class Pessoa {
  private _nome: string;
  private _idade: number;
  private _email: string;

  constructor(nome: string, idade: number, email: string) {
    this._nome = nome;
    this._idade = idade;
    this._email = email;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get idade(): number {
    return this._idade;
  }

  set idade(value: number) {
    this._idade = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}

import * as fs from 'fs';

class PessoaCsvAdapter implements RepositorioDePessoas {
  private caminhoArquivo: string;

  constructor(caminhoArquivo: string) {
    this.caminhoArquivo = caminhoArquivo;
  }

  listarPessoas(): Pessoa[] {
    const conteudo = fs.readFileSync(this.caminhoArquivo, 'utf-8');
    const linhas = conteudo.split('\n').slice(1); 
    const pessoas: Pessoa[] = [];

    for (const linha of linhas) {
      const [nome, idadeStr, email] = linha.split(',');
      const idade = parseInt(idadeStr.trim(), 10);
      if (nome && !isNaN(idade) && email) {
        pessoas.push(new Pessoa(nome.trim(), idade, email.trim()));
      }
    }

    return pessoas;
  }
}

class Main {
  static main(): void {
    const adapter = new PessoaCsvAdapter('pessoas.csv');
    const pessoas = adapter.listarPessoas();

    for (const pessoa of pessoas) {
      console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Email: ${pessoa.email}`);
    }
  }
}

Main.main();