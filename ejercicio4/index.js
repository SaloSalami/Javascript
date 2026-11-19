const select = document.getElementById("colorselect");
const card = document.getElementById("card");

select.addEventListener("change", function () {
    card.style.backgroundColor = select.value;
});
