let personen = [];

//push --> object aan array toevoegen
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht

const updatePersoonInLijstInUserInterface = (persoon) => {

}
const vulUserInterfaceOpbasisVanPersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let selectedIndex = lstPersonen.selectedIndex;
    if (selectedIndex !== -1) {
        let persoon = personen[selectedIndex];
        let voornaam = document.getElementById("txtVoornaam");
        voornaam.value = persoon.voornaam;
        let lastname = document.getElementById("txtFamilienaam");
        lastname.value = persoon.lastname;
        let geboorteDatum = document.getElementById("txtGeboorteDatum");
        geboorteDatum.value = persoon.geboorteDatum.toISOString().slice(0, 10); // "jaar-maand-dag" formaat;
        let email = document.getElementById("txtEmail");
        email.value = persoon.email;
        let aantalKinderen = document.getElementById("txtAantalKinderen");
        aantalKinderen.value = persoon.aantalKinderen;
    }

}
const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.text = persoon.voornaam + " " + persoon.lastname;
    option.value = persoon.email;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length - 1;
}
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let lstPersonen = document.getElementById("lstPersonen");
    valideer();
    // zijn er elementen als invalid gemarkeerd?
    let elements = document.getElementsByClassName("invalid");
    if (elements.length == 0) {
        // alles in orde, we mogen bewaren
        let persoon = {};
        if (lstPersonen.selectedIndex == -1) {
            //nieuwe persoon bewaren
            vulPersoonOpBasisVanUserInterface(persoon); // parameter ByReference
            personen.push(persoon); //toevoegen aan interne lijst
            voegPersoonToeAanLijstInUserInterface(persoon);
        } else {
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonOpBasisVanUserInterface(persoon);
        }
    }

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
    // een nieuw aangemaakte persoon voegen we toe
    // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten


};

const vulPersoonOpBasisVanUserInterface = (persoon) => {
    let voornaam = document.getElementById("txtVoornaam");
    persoon.voornaam = voornaam.value.trim();
    let lastname = document.getElementById("txtFamilienaam");
    persoon.lastname = lastname.value.trim();
    let geboorteDatum = document.getElementById("txtGeboorteDatum");
    persoon.geboorteDatum = new Date(geboorteDatum.value.trim());
    let email = document.getElementById("txtEmail");
    persoon.email = email.value.trim();
    let aantalKinderen = document.getElementById("txtAantalKinderen");
    persoon.aantalKinderen = parseInt(aantalKinderen.value.trim());
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1;
    //HET VOLGENDE KAN VEEL KORTER, ZIE NA DE COMMENTAAR:
    // let firstname = document.getElementById("txtVoornaam");
    // let lastname = document.getElementById("txtLastname");
    // let geboorteDatum = document.getElementById("txtGeboorteDatum");
    // let email = document.getElementById("txtEmail");
    // let aantalKinderen = document.getElementById("txtAantalKinderen");
    //Maak alle velden leeg
    // firstname.value="";
    // lastname.value="";
    // geboorteDatum.value="";
    // email.value="";
    // aantalKinderen.value="";
    console.log("Klik op de knop nieuw");
    let tekstvelden = document.querySelectorAll("input[type=text]");
    //zolang er elementen zijn
    tekstvelden.forEach((elem) => {
        elem.value = "";
    });
    clearAllErrors();
    // OF


    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren

};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", vulUserInterfaceOpbasisVanPersoon);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);