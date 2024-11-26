async function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Envia os dados do formulário para a API para validar
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
  
    const errorMessage = document.getElementById('error-message');
  
    if (response.ok) {
      window.location.href = '/';
    } else {
      const result = await response.json();
      errorMessage.textContent = result.message || 'Email ou senha incorretos';
    }
  }
  

  document.getElementById('loginForm').addEventListener('submit', loginUser);
  