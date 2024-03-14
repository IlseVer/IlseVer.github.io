const setup = () => {
    let range = document.getElementById("range");
    range.addEventListener("input", update);
    range.addEventListener("change", update);
    update();
}

const update = () => {
    let waardeResults = document.getElementsByClassName("range");
    let resultRange = document.getElementById("resultRange");
    resultRange.innerHTML = waardeResults[0].value;
}

window.addEventListener("load", setup);