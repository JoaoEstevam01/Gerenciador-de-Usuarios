async function addUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

  if (response.ok) {
    alert('Usuário adicionado com sucesso!');
    window.location.href = '/';
  } else {
    alert('Erro ao adicionar usuário');
  }
}
