const setup = () => {
     let btnGo = document.getElementById("btnGo");
     btnGo.addEventListener("click", testOpGeldigeWaarde);
}

const createElementen = (getal) => {
    let datum = new Date();
    datum = "Tafel van " +getal+" aangemaakt op: "+datum.getHours()+":"+datum.getHours()+":"+datum.getSeconds();
    let sectionTafels = document.getElementById("tafels");
    let divTafel = document.createElement("div");
    sectionTafels.appendChild(divTafel);
    divTafel.classList.add("tafel");
    let titelTafel = document.createElement("h1");
    divTafel.appendChild(titelTafel);
    for (let i = 1; i < 11; i++) {
        let rij = document.createElement("p");
        divTafel.append(rij);
        let berekening = i * getal;
        rij.textContent = getal+ " x "+i+" = " + berekening;
            }
    titelTafel.textContent = datum;
}

const testOpGeldigeWaarde = () => {
    let txtInput = document.getElementById("txtInput");
    let getal = txtInput.value;

    if (txtInput === null) {
        alert("Je moet een waarde invullen");
    } else if (getal === "") {
        alert("Je moet een waarde invullen.");
    } else if (isNaN(getal)) {
        alert("Je moet een getal invoeren");
    } else {
        getal = parseInt(getal);
        txtInput.value="";   //tekstinvoer wissen
        createElementen(getal);
    }
}

// handige functie om alle children van een element te verwijderen
// verwijder alle childs van een element
const verwijderAlleChildren = (sectionTafels) => {
    while (sectionTafels.firstChild) {
        sectionTafels.removeChild(sectionTafels.firstChild);
    }
}

window.addEventListener("load", setup);