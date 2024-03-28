const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    let btnSave = document.getElementById("btnSave");
    for (let i = 0; i < sliders.length; i++) {
        // we moeten zowel op het input als het change event reageren,
        // zie http://stackoverflow.com/questions/18544890
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();
    btnSave.addEventListener("click", save);
}

const update = () => {
    let red = document.getElementById("sldRed").value; //input always value
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;// html-element innerHTML
    document.getElementById("lblBlue").innerHTML = blue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

}
const save = () => {
    let swatch = document.getElementById("swatch").style.backgroundColor;
    let maakDiv = document.createElement("div");
    maakDiv.setAttribute("class", "saveSwatch");
    maakDiv.style.backgroundColor = swatch;
    document.body.appendChild(maakDiv);

    let btnX = document.createElement("button");
    btnX.textContent = "X";
    maakDiv.appendChild(btnX);
    btnX.style.float = "right";
    console.log(maakDiv.nodeType);
    btnX.addEventListener("click", verwijder);

    maakDiv.addEventListener("click", zetKleurOver);
}


const zetKleurOver = (event) => {
    let swatch = document.getElementById("swatch");
    let bepaalKleur = event.currentTarget.style.backgroundColor;
    swatch.style.backgroundColor = bepaalKleur;

    console.log(swatch);
    let rgbArray = bepaalKleur.slice(4, -1).split(",");
    let red = rgbArray[0];
    let green = rgbArray[1];
    let blue = rgbArray[2];

    document.getElementById("lblRed").textContent = red;
    document.getElementById("lblGreen").textContent = green;
    document.getElementById("lblBlue").textContent = blue;
    document.getElementById("sldRed").value = parseInt(red);
    document.getElementById("sldGreen").value = parseInt(green);
    document.getElementById("sldBlue").value = parseInt(blue);
}
const verwijder = (event) => {
    console.log("target is " + event.target.nodeName + ", currentTarget is " + event.currentTarget.nodeName);
    event.currentTarget.parentNode.remove();
    event.stopPropagation();
}

window.addEventListener("load", initialize);