# Natanael Figueredo Balbo 22014185-2 | Rodrigo Shodi Sumioshi 22014191-2

Este projeto implementa o padrão de design Adapter para integrar um sistema legado que armazena dados de pessoas em um arquivo CSV com um novo sistema que utiliza objetos da classe `Pessoa`. O objetivo é permitir que o novo sistema utilize os dados do arquivo CSV sem precisar conhecer os detalhes do formato do arquivo.

## Classes Criadas

Para implementar o padrão Adapter, as seguintes classes e interfaces foram criadas:

1. **Interface** `RepositorioDePessoas`

   - Define o contrato para listar pessoas, retornando uma lista (ou array) de objetos `Pessoa`.
   - Método: `listarPessoas(): Pessoa[]`

2. **Classe** `Pessoa`

   - Representa uma pessoa com os atributos `nome`, `idade` e `email`.
   - Contém um construtor para inicializar os atributos e métodos getters e setters para acessar e modificar os dados.

3. **Classe** `PessoaCsvAdapter`

   - Implementa a interface `RepositorioDePessoas`.
   - Atua como o Adapter, adaptando o sistema legado (arquivo CSV) para a interface esperada pelo novo sistema.
   - Recebe o caminho de um arquivo CSV no construtor.
   - No método `listarPessoas()`, lê o arquivo CSV, ignora o cabeçalho e converte cada linha em um objeto `Pessoa`, retornando uma lista de pessoas.

4. **Classe** `Main`

   - Classe de teste que demonstra o uso do `PessoaCsvAdapter`.
   - Cria uma instância do adapter, chama o método `listarPessoas()` e imprime os dados das pessoas no console.

## Funcionamento do Padrão Adapter

- O **Adapter** (`PessoaCsvAdapter`) permite que o novo sistema utilize a interface `RepositorioDePessoas` para acessar os dados do arquivo CSV, sem precisar modificar o sistema legado.
- Isso garante que o novo sistema possa ser facilmente integrado a diferentes fontes de dados, desde que haja um adapter correspondente.

## Como Executar

1. Certifique-se de ter o Node.js instalado.
2. Compile o código TypeScript com `npx tsc main.ts`.
3. Execute o código JavaScript gerado com `node main.js`.