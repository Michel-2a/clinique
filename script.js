document.addEventListener("DOMContentLoaded", function () {
  var carouselContainer = document.getElementById("carouselContainer");
  var carouselItems = Array.from(
    document.getElementsByClassName("carouselItem")
  );
  var currentIndex = 0;
  var itemWidth = carouselItems[0].offsetWidth; // Largeur d'un élément

  // Fonction pour déplacer le caroussel vers la gauche
  function moveLeft() {
    if (currentIndex > 0) {
      currentIndex--;
      carouselContainer.style.transform = `translateX(-${
        currentIndex * itemWidth
      }px)`;
    }
  }

  // Fonction pour déplacer le caroussel vers la droite
  function moveRight() {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
      carouselContainer.style.transform = `translateX(-${
        currentIndex * itemWidth
      }px)`;
    }
  }

  // Défilement automatique
  setInterval(moveRight, 3000); // Changez 3000 pour ajuster la vitesse de défilement
});
