<div align="center"> <img src="https://github.com/MariaGabrielaReis/nlw-12-spacetime-web/assets/69374340/6f4205cb-565a-4b77-8985-f83a7ef30024" alt="Banner com o nome do projeto" /> </div>

Site para a cápsula do tempo de projetos, uma aplicação que permite criar uma linha do tempo de todos os seus projetos, com descrição, imagens e vídeos! <br>
**Aplicação inspirada no evento Next Level Week: Spacetime, promovido pela Rocketseat** 🚀
> :hammer_and_wrench: Tecnologias e ferramentas: **TypeScript, Next, React, TailwindCSS**

## :gear: Como rodar

Com o [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) e [Git](https://git-scm.com/) instalados, siga o tutorial abaixo:
```bash
# Clone esse repositório
$ git clone https://github.com/MariaGabrielaReis/nlw-12-spacetime-web.git

# Instale as dependências do projeto, assim como suas tipagens
$ yarn
```

Antes de rodar o projeto, certifique-se de ter criado uma instância do aplicativo para poder acessar o OAuth do Github:
- Acesse `settings` > `developer settings` > `oauth apps` e cadastre:
  - **Homepage URL** como `http://localhost:3000`
  - **Authorization callback URL** como `http://localhost:3000/api/auth/callback`

Após esta configuração, adicione um arquivo chamado `.env.local` na raíz do projeto com o **client_id** fornecido pelo GitHub: 
```bash
# GitHub
NEXT_PUBLIC_GITHUB_CLIENT_ID=
```

Agora execute a aplicação com o comando abaixo, assim o servidor inciará na porta:3000 (acesse [http://localhost:3000](http://localhost:3000)):

```bash
# Execute a aplicação
$ yarn dev
```

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202023-LinkedIn-0D9488?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
