const buscador = document.getElementById('buscador');

buscador.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se recargue la página

const terminoBusqueda = buscador.querySelector('input[type="text"]').value.toLowerCase();

const rutasAlbumes = {
    "oasis": "https://pepitopregunton.github.io/pagina-4/",
    "feliz cumpleaños ferxxo": "https://pepitopregunton.github.io/pagina-5/",
    "yo hago lo que me da la gana": "https://pepitopregunton.github.io/pagina-6/",
    // Agrega aquí más álbumes con sus URLs completas
};

if (terminoBusqueda in rutasAlbumes) {
    console.log("Redirigiendo a: " + rutasAlbumes[terminoBusqueda]); // Para depurar
    window.location.href = rutasAlbumes[terminoBusqueda];
} else {
    alert("Álbum no encontrado.");
}
});
