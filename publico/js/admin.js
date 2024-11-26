async function getUsers() {
  const response = await fetch('/api/users', {
    headers: { 'Authorization': 'Bearer adminToken' }
  });
  
  if (!response.ok) {
    alert('Erro ao acessar usuários. Acesso negado.');
    return;
  }

  const users = await response.json();
  const usersList = document.getElementById('users-list');
  usersList.innerHTML = '';
  users.forEach(user => {
    usersList.innerHTML += `
      <li>
        ID: ${user.id}, Nome: ${user.name}, Email: ${user.email}
        <button onclick="deleteUser(${user.id})">❌</button>
      </li>
    `;
  });
}

async function deleteUser(userId) {
  const response = await fetch(`/api/users/${userId}`, {
    method: 'DELETE',
    headers: { 'Authorization': 'Bearer adminToken' }
  });

  if (response.ok) {
    alert('Usuário excluído com sucesso!');
    getUsers();
  } else {
    alert('Erro ao excluir usuário');
  }
}

getUsers();
