let bouton_haut_de_page = document.getElementsByClassName("retour-haut-de-page")[0]; // On prend le premier élément appartenant à la classe retour-haut-de-page

// Quand l'utilisateur fait défiler la page, on appelle la fonction defilement()
window.onscroll = function() {
    defilement()
};

function defilement() {
  if (document.documentElement.scrollTop > 20) { // Si l'utilisateur a défilé de plus de 20px
    bouton_haut_de_page.style.display = "block"; // On montre le bouton
  } else {
    bouton_haut_de_page.style.display = "none";  // Sinon on cache le bouton
  }
}


function retourEnHaut() { // Quand l'utilisateur clique sur le bouton
  window.scrollTo({top: 0, behavior: 'smooth'}); // On défile jusqu'en haut de la page de manière progressive
} 
