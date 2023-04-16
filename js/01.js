// Con esto le di funcionalidad al icono para cerrar ventana
const botonCerrar = document.getElementById("cerrar");
botonCerrar.addEventListener("click", function() {window.close();
});

// Envio del formulario
document.querySelector('.button').addEventListener('click'), function(e) {e.preventDefault()};

document.getElementById('myForm').submit(); // Envía el formulario

