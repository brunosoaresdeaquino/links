// script.js

// Função para alternar a exibição do menu
function toggleMenu() {
  const menuItems = document.getElementById("menuItems");
  if (menuItems.style.display === "block") {
      menuItems.style.display = "none"; // Esconde o menu
  } else {
      menuItems.style.display = "block"; // Mostra o menu
  }
}
