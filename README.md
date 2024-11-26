<h1 align="center" style="font-weight: bold;">Gerenciador de Usuários 🔌</h1>

<p align="center">
 <a href="#technologies">Tecnologias/Technologies</a> • 
 <a href="#started">Começando/Getting Started</a> • 
  <a href="#colab">Colaboradores/Collaborators</a> •
 <a href="#contribute">Contribua/Contribute</a>
</p>

<p align="center">
    <b>This project is a User Management API built with Node.js and Express. The application provides basic functionalities for managing users, including registration, login, and administration. Users can register, log in, and administrators can view and delete registered users. Password security is ensured using the bcrypt package for hashing. The application is accessed via RESTful endpoints and has a simple frontend with HTML, CSS, and JavaScript for user interaction.</b>
</p>

<p align="center">
     <a href="[https://github.com/JoaoEstevam01/TechPrime](https://github.com/JoaoEstevam01/Gerenciador-de-Usuarios)">📱 Visite o projeto/Visit this Project</a>
</p>

<h2 id="layout">🎨 Layout</h2>

<p align="center">
    <img src="/publico/img/TELA-01.png" alt="TELA-1" width="600px">
    <img src="/publico/img/TELA-02.png" alt="Tela-2" width="600px">
    <img src="/publico/img/TELA-03.png" alt="TELA-2" width="600px">
    <img src="/publico/img/TELA-04.png" alt="Tela-2" width="600px">
    <img src="/publico/img/TELA-05.png" alt="Tela-2" width="600px">
</p>

<h2 id="technologies">💻 Tecnologias/Technologies</h2>

<b>BACK-END:</b>
- NODE.JS
- EXPRESS
- BCRYPT

<b>FRONT-END:</b>
- HTML
- CSS
- JAVASCRIPT

<b>OTHERS:</b>
- JSON
- HTTP/REST

<h2 id="started">🚀 Começando/Getting started</h2>

<h3>1. Clonando/Cloning</h3>

```bash
git clone https://github.com/JoaoEstevam01/Gerenciador-de-Usuarios
cd Gerenciador-de-Usuarios
```

<h3>2. Installing/Instalando</h3>

```bash
npm install
```

<h3>3. Starting the server/Iniciando o servidor</h3>

```bash
node app.js
```

<b>O servidor estará disponível em http://localhost:3000.</b>

<h3>4. Accessing applications/Acessando aplicações</h3>

- Página inicial (home): http://localhost:3000/ <br>Mostra um menu inicial com links para Login, Cadastro e Admin.

- Cadastro: http://localhost:3000/cadastro <br>Formulário para cadastro de novos usuários.

- Login: http://localhost:3000/login <br>Formulário para login dos usuários cadastrados.

- Admin (somente para administradores): http://localhost:3000/admin <br>Página de administração, onde os administradores podem visualizar e excluir usuários. <br>O acesso a esta página é protegido e requer o token de administrador.


<b>- Funcionalidades da API</b>
Cadastro de usuário: Método POST para criar novos usuários.
Login de usuário: Método POST para validar login de usuários.
Exclusão de usuário: Método DELETE para excluir usuários (somente admins).

<h2 id="colab">🤝 Colaboradores/Collaborators</h2>

Apenas eu/It's just me. 🤠👍

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/JoaoEstevam01">
        <img src="/img/João.jpeg" width="100px;" alt="João"/><br>
        <sub>
          <b>João Estevam</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribua/Contribute</h2>

<h3> Project structure/Estrutura do projeto </h3>

```bash
/mini-api
  ├── /node_modules/            # Dependências do projeto
  ├── /publico/                 # Arquivos públicos (HTML, CSS, JS)
  │    ├── /js/                 # Scripts JS (admin.js, cadastro.js, login.js)
  │    ├── /style/              # Arquivos de estilo (admin.css, cadastro.css, login.css)
  │    ├── admin.html           # Página de administração (somente para admin)
  │    ├── cadastro.html        # Página de cadastro
  │    └── login.html           # Página de login
  ├── /routes/                  # Definição das rotas de usuários
  │    └── userRoutes.js        # Roteamento para CRUD de usuários
  ├── app.js                    # Arquivo principal do servidor Express
  ├── package-lock.json         # Gerenciamento de dependências
  └── package.json              # Definição das dependências do projeto
```

Caso deseje me ajudar neste projeto com mais ideias, modificações, melhorias e se tornar um colaborador/If you'd like to assist me with this project by contributing ideas, modifications, improvements, and becoming a collaborator:

Email: joaoestevam.1204@gmail.com
