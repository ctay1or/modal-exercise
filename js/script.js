var button = document.querySelector("button");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

//When the user clicks the button, a modal with text and a gif will appear!

button.addEventListener("click", function () {
    modal.classList.add("show-modal");
    button.innerText = "You've got this!!!"
});

modalX.addEventListener("click", function () {
    modal.classList.remove("show-modal");
    button.innerText = "Who's got this?"
});
