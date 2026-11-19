const input = document.getElementById("nombre");
const boton = document.getElementById("saludobtn");
const parrafo = document.getElementById("saludo");

boton.addEventListener("click", function () {
    const nombre = input.value
    console.log(nombre);
    parrafo.textContent = "Hola " + nombre + " Bienvenid@";
});


