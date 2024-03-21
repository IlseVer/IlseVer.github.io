const setup = () => {
    let btnToon = document.getElementById("btnToon");

    btnToon.addEventListener("click", toonTrigram);

}
const toonTrigram = () => {
    let tekst = document.getElementById("txtInvoer").value;
    let lstTrigrams = document.getElementById("lstTrigrams");
    let trigrams = getTrigram(tekst); //is een array
    let output = "";
    for (let i = 0; i < trigrams.length; i++) {
        output += "<li>" + trigrams[i] + "</li>";  // wel geen mooie manier met html --> later met createElement()
    }
    lstTrigrams.innerHTML = output;

}
const getTrigram = (tekst) => {
    let result = [];
    let trigram;

    for (let i = 0; i < tekst.length - 3; i++) {   //  -3 anders toont hij de laatste maar 1 en 2 en dat zijn geen trigrams
        trigram = tekst.slice(i, i + 3);
        result.push(trigram);
    }
    return result;
}
window.addEventListener("load", setup);