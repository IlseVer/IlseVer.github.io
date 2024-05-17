const setup = () => {

     let btnGo = document.getElementById("btnGo");
     btnGo.addEventListener("click", testOpGeldigeWaarde);
plaatsTafelsTerug();
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
    let rijen =[];
    for (let i = 1; i < 11; i++) {
        let rij = document.createElement("p");
        divTafel.append(rij);
        let berekening = i * getal;
        rij.textContent = getal+ " x "+i+" = " + berekening;
        rijen.push(rij.textContent);
            }
    titelTafel.textContent = datum;
    opslaan(titelTafel,rijen, sectionTafels);

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
    while (sectionTafels.childNodes.length > 0) {
        sectionTafels.removeChild(sectionTafels.firstChild);
    }

}
const opslaan=(titelTafel,rijen)=> {
    let lstHistory;
    let historyObject = {
        titelTafel:titelTafel,
       rijen:rijen
    }

    lstHistory = JSON.parse(localStorage.getItem("vives.be.history"));
    if (!lstHistory) {
        lstHistory = [];
    }
    lstHistory.push(historyObject);

    localStorage.setItem("vives.be.history", JSON.stringify(lstHistory));


}
const plaatsTafelsTerug = (sectionTafels) => {
    verwijderAlleChildren(sectionTafels);
    let lstHistory = JSON.parse(localStorage.getItem("vives.be.history"));
    if(lstHistory){
        for (let i = lstHistory.length; i < 1; i--) {
            createElementen(lstHistory[i].titelTafel.value,lstHistory[i].rijen.value);
        }
    }
}
window.addEventListener("load", setup);