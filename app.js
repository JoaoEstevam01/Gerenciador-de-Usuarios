const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const adminAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || authHeader !== 'Bearer adminToken') {
    return res.status(403).send('Acesso negado. Você precisa ser um administrador.');
  }
  next();
};

// Diretorio para puxar os arquivos
app.use(express.static(path.join(__dirname, 'publico')));

// Usando as rotas de usuários
app.use('/api/users', userRoutes); 

// Rota para a página de cadastro
app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'publico', 'cadastro.html'));
});

// Rota para a página de admin
app.get('/admin', adminAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'publico', 'admin.html'));
});

// Informações iniciais para teste localhost sem /
app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo API de Gerenciamento de Usuários!</h1> <p>Escolha uma das opções abaixo:</p> <ul> <li><a href="/login.html">Login</a></li> <li><a href="/cadastro.html">Cadastro</a></li> <li><a href="/admin.html">Admin</a></li> <li><a href="/admin">Admin (Teste sem permissão)</a></li> </ul> <footer>Desenvolvido por --> João Paulo Estevam Valdivino</footer>');
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
