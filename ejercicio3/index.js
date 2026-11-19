const input = document.getElementById("textinput");
const parrafo = document.getElementById("textout");

input.addEventListener("input", function () {
    parrafo.textContent = input.value;
});