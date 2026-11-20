const input = document.getElementById("uptask")
const lista = document.getElementById("tasklist")

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const tarea = input.value;
        if (tarea.trim() !== "") {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = tarea;
            lista.appendChild(li);
            input.value = "";
        }
    }
});