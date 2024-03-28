// Use the querySelectorAll method to find the <p> element, and change its text to "Good Job!".

const changeTekst = (event) => {
    event.target.innerHTML = "Good job!";
}

const setup = () => {
    let tekst = document.querySelector("p");
    tekst.addEventListener("click", changeTekst);
}

window.addEventListener("load", setup);


