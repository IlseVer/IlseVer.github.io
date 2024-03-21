// OPLOSSING:
const setup = () => {
    let gemeenten = [];
    let stoppen = false;
    while (!stoppen) {
        let input = prompt("Geef een gemeente in");
        stoppen = (input == null || input.trim().toLowerCase() == "stop");
        if (!stoppen) {
            gemeenten.push(input);
        }
    }
    gemeenten.sort(compare);
    voegGemeentenToe(gemeenten);

}

const compare = (a, b) => {
    return a.localeCompare(b);
}

const voegGemeentenToe = (gemeenten) => {
    let div = document.getElementById("gemeenten");
    let htmlTekst = "<select>";
    for (let i = 0; i < gemeenten.length; i++) {
        htmlTekst += "<option>" + gemeenten[i] + "</option>";
        div.innerHTML = htmlTekst;
    }

}
window.addEventListener("load", setup);