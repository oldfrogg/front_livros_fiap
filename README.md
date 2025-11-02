# Front End GERENCIAMENTO DE LIVROS

## Sobre
* Este repositório é um projeto acadêmico de desenvolvimento Front End.
* Nele temos um site de navegação para controlar uma API de gerenciamento de livros em uma interface mais amigável.
* É necessário ter o Back End e o MySQL Server rodando em sua máquina para poder utilizar esse Front. Por isso, primeiro dirija-se ao [Back End](https://github.com/oldfrogg/back_livros_fiap) desse projeto e siga os passos para instalá-lo e executá-lo corretamente.

## Objetivos
* Desenvolver uma interface agradável e intuitiva para o usuário fazer o controle do cadastro de livros em um banco de dados;
* Familiarizar-se com o React e o Node.js;
* Familiarizar-se com a criação e reutilização de componentes do React;
* Trabalhar com rotas, props, hooks, e fazer requisições a um servidor local;

## Rotas
* / - Home Page: Apresentação do site.
* /lista_livros/ - Lista de Livros: Mostra todos os livros cadastrados no BD.
* /add_livro/ - Adicionar Livro: Permite que o usuário adicione um livro ao BD.
* /editar_livro/:id - Editar Livro: Permite a edição de um livro cadastrado no BD a partir de seu ID.
* /visualizar_livro/:id - Visualizar Livro: Permite uma visualização individual de um livro cadastrado, mostrando também a capa do livro.

## Como utilizar

- Caso tenha o git instalado e configurado nas variáveis de ambiente do sistema, clonar através do
```bash
git clone https://github.com/oldfrogg/front_livros_fiap
cd front_livros_fiap
```

- Também é possível fazer o download do projeto diretamente através do Github.

É necessário ter o Node.JS instalado em sua máquina e as variáveis de ambiente relacionadas corretamente configuradas.

Para instalar os componentes necessários para a visualização do projeto, navegue via prompt de comando até o diretório onde estão os arquivos baixados.

- Abra o projeto no editor de sua preferência, e, na raiz do projeto, crie um arquivo ".env" e insira a seguinte variável de ambiente. É necessário utilizar a porta 3001, pois o Back estará rodando na porta 3000 e configurado para aceitar requisições da porta 3001.
```env
PORT=3001
```

Então, instale os pacotes necessários para o projeto (descritos no package.json) através do seguinte comando:
```bash
> npm i
```

Após a finalização da instalação das dependências, inicie o projeto através do comando:
```bash
> npm start
```

Com isso a aplicação ficará ativa em um servidor local. 
Você poderá acessá-lo através do navegador utilizando:
```bash
http://localhost:3001/
```
ou:
```bash
http://127.0.0.1:3001/
```

Agora já será possível trabalhar na aplicação a partir do navegador.

Para encerrar, basta, no prompt de comando, utilizar CTRL + 'C' e confirmar com 'S'.