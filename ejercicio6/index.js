
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function(event){
    let Upeso = Number (document.getElementById("peso").value);
    let Ualtura = Number (document.getElementById("altura").value); 
    const IMC = Upeso / (Ualtura * Ualtura);
    
    
    resultado.textContent = "Tu Imc es " + IMC.toFixed(1);
});