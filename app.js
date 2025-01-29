
const users = [
    { username: "user1"},
    { username: "user2"},
    { username: "admin"},
  ];
  
  
  // Elementos do DOM
  const loginButton = document.getElementById("loginButton");
  const usernameInput = document.getElementById("username");
  const errorMessage = document.getElementById("errorMessage");
  
  // Função de login
  loginButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
  
    // Verifica se o usuário está na lista
    const user = users.find((u) => u.username === username);
  
    if (user) {
      alert(`Bem-vindo, ${username}!`);
      errorMessage.textContent = ""; // Limpa mensagens de erro
      window.location.href = "https://forms.gle/K9DADkrMo98W9GjbA";
    } else {
      errorMessage.textContent = "Usuário incorreto.";
    }
  });