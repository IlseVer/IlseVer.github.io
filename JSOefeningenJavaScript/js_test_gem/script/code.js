const setup = () => {
    let optionKies = document.getElementById("optionKies");
    let inputTekst = document.getElementById("txtLetter");
    optionKies.addEventListener("change", change);
    optionKies.addEventListener("input", change);
    inputTekst.addEventListener("change", change);
    inputTekst.addEventListener("input", change);

}

const change = () => {
    let outputFoto = document.getElementById("img");
    let optionKies = document.getElementById("optionKies").options;
    let indexKies = document.getElementById("optionKies").selectedIndex;
    let outputTekst = document.getElementById("note");
    let txtAantal = document.getElementById("txtAantal");
    let inputTekst = document.getElementById("txtLetter");

    let waarde = optionKies[indexKies].text;
    console.log(waarde);
    if (waarde === "Kip met ei") {
        outputFoto.src = "./images/with-egg.png";
        outputFoto.alt = "Hierboven een kip met ei";
        outputTekst.textContent = waarde;
    }
    if (waarde === "Kip zonder ei") {
        outputFoto.src = "./images/without-egg.png";
        outputFoto.alt = "Hierboven een kip zonder ei";
        outputTekst.textContent = waarde;
    }
    if (waarde === "--KIES--") {
        outputFoto.src = "";
        outputFoto.alt = "";
        outputTekst.textContent = "";
    }

// //Aantal:
//     let result = 0;
//     let idx = waarde.indexOf(inputTekst.value);
//     while (idx != -1) {
//         result++;
//         idx = waarde.indexOf(inputTekst.value, idx + inputTekst.length);
//     }
//     txtAantal.textContent = "Letter "+inputTekst+ "komt "+ result + "voor in bovenstaande zin.";


}

window.addEventListener("load", setup);