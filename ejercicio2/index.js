let numero = document.getElementById("contador");
const contarBtn = document.getElementById("contar");
const reiniciarBtn = document.getElementById("reiniciar");

contarBtn.addEventListener("click", function () {
    let numeroUP = parseInt(numero.textContent);
    numeroUP++;
    numero.textContent = numeroUP;
});

reiniciarBtn.addEventListener("click", function () {
    numero.textContent = 0;
});

if (numero.textContent >= 10) {
    numero.style.color = "green";
}
else if (numero.textContent <= 10) {
    numero.style.color = "black";
}