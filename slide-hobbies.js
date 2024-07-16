// Seleciona el contenedor de imágenes
const imageContainer = document.querySelector('.image-container');

// Seleciona todas las imágenes
const images = imageContainer.querySelectorAll('.image');

// Establece la imagen activa inicial
let activeImage = 0;

// Función para cambiar la imagen activa
function changeImage() {
  // Desactiva la imagen actual
  images[activeImage].classList.remove('active');

  // Incrementa el índice de la imagen activa
  activeImage = (activeImage + 1) % images.length;

  // Activa la nueva imagen
  images[activeImage].classList.add('active');
}

// Ejecuta la función cada 2.5 segundos
setInterval(changeImage, 2500);