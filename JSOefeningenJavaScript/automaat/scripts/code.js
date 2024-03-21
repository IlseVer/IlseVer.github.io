const setup = () => {
    let btnHerbereken = document.getElementById("btnHerbereken");

    btnHerbereken.addEventListener("click",bereken);
}

const bereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let inputs = document.getElementsByClassName("input");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");


    //inputs = parseInt(inputs);
    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].innerHTML);
        let input = inputs[i].value;
        let btw = parseFloat(btws[i].innerHTML);
        let prijsZonderBtw = (prijs * input)
        subtotalen[i].innerHTML = (prijsZonderBtw + (prijsZonderBtw * (btw/100))).toFixed(2) + " Eur";

    }

}

window.addEventListener("load", setup);