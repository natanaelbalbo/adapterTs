**Projeto de Integração com o Padrão Adapter**

Este projeto tem como objetivo demonstrar a aplicação do padrão de design **Adapter** para integrar um sistema legado, que utiliza arquivos CSV, a um novo sistema orientado a objetos. Com essa abordagem, é possível acessar e manipular os dados do CSV sem que o novo sistema precise conhecer sua estrutura interna.

### 🔧 Estrutura do Projeto

* **Classe Pessoa**
  Define uma entidade com os atributos: `nome`, `idade` e `email`.

* **Classe PessoaCsvAdapter**
  Responsável por ler os dados do arquivo CSV e transformá-los em instâncias da classe `Pessoa`.

* **Função main**
  Demonstra o uso do Adapter, exibindo no console as informações das pessoas extraídas do CSV.

### ▶️ Como Executar

1. Instale as dependências com:

   ```bash
   npm install
   ```
2. Certifique-se de ter o Node.js instalado em sua máquina.
3. Execute o projeto com:

   ```bash
   node main.js
   ```

---

**Alunos:**
Natanael Figueredo Balbo 22014185-2 
Rodrigo Shodi Sumioshi 22014191-2

---
