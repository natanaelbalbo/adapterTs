const fs = require('fs');

class Pessoa {
  constructor(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
}

class PessoaCsvAdapter {
  constructor(caminhoArquivo) {
    this.caminhoArquivo = caminhoArquivo;
  }

  listarPessoas() {
    const conteudo = fs.readFileSync(this.caminhoArquivo, 'utf-8');
    const linhas = conteudo.split('\n').slice(1);
    const pessoas = [];

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

const main = () => {
  const adapter = new PessoaCsvAdapter('pessoas.csv');
  const pessoas = adapter.listarPessoas();

  for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Email: ${pessoa.email}`);
  }
};

main();