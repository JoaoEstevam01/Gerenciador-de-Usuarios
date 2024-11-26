const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// "Banco de dados" infor/teste
let users = [
  { id: 1, name: 'Teste01', email: 'teste01@exemplo.com', password: 'senha123' },
  { id: 2, name: 'Teste02', email: 'teste02@exemplo.com', password: 'senha456' },
];

// Rota para obter todos os usuários
router.get('/', (req, res) => {
  res.json(users);
});

// Rota para criar um novo usuário
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send('Nome, email e senha são obrigatórios');
  }

  const salt = await bcrypt.genSalt(10);
  
  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword, // Armazena senha criptografada
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Rota para deletar um usuário
router.delete('/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).send('Usuário não encontrado');
  }
  
  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser);
});

// Rota para login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Procurando o usuário no "banco de dados"
  const user = users.find(u => u.email === email);
  
  if (!user) {
    return res.status(400).json({ message: 'Email ou senha incorretos' });
  }

  // Comparando a senha fornecida com a senha criptografada armazenada
  const isMatch = await bcrypt.compare(password, user.password);
  
  if (!isMatch) {
    return res.status(400).json({ message: 'Email ou senha incorretos' });
  }

  // Se a senha estiver correta
  res.status(200).json({ message: 'Login bem-sucedido' });
});

module.exports = router;
