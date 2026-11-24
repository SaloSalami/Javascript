const contraseña = document.getElementById("clave");
let parrafo = document.getElementById("texto");

contraseña.addEventListener("input", function(){
    const textout = contraseña.value.length;

    if (textout < 6){
        parrafo.textContent = "pesima contraseña, super hackeable";
        parrafo.style.color = "red";
    }
    else if (textout < 10){
        parrafo.textContent = "ahi maso, podria ser mejor";
        parrafo.style.color = "gold";
    }
     else{
        parrafo.textContent = "Asi melo";
        parrafo.style.color = "green";
    }


});

