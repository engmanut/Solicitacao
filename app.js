
const users = [
{ username: "2009370" },  
{ username: "2009400" },  
{ username: "2009402" },  
{ username: "2009443" },  
{ username: "2009576" },  
{ username: "2011058" },  
{ username: "2012768" },  
{ username: "2015017" },  
{ username: "2015345" },  
{ username: "2016259" },  
{ username: "2016924" },  
{ username: "2017134" },  
{ username: "2017853" },  
{ username: "2017934" },  
{ username: "2018251" },  
{ username: "2019051" },  
{ username: "2019232" },  
{ username: "2020226" },  
{ username: "2020700" },  
{ username: "2022095" },  
{ username: "2022199" },  
{ username: "2022245" },  
{ username: "2022582" },  
{ username: "2022594" },  
{ username: "2022977" },  
{ username: "2023280" },  
{ username: "2023309" },  
{ username: "2023976" },  
{ username: "2024268" },  
{ username: "2024271" },  
{ username: "2024343" },  
{ username: "2024359" },  
{ username: "2024457" },  
{ username: "2024744" },  
{ username: "2024745" }  


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
