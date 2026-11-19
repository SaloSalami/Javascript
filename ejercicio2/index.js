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

