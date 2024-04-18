let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    IMAGE_PATH_PREFIX: "./images/", // map van de kaarten
    IMAGE_PATH_SUFFIX: ".png", // extensie van de kaarten
    EERSTE_KAART: null,
    TWEEDE_KAART: null,
    AANTAL_KLIKS: 0
}
const setup = () => {
    let speelveld = document.getElementById("speelveld");
    let arrayCards = [];
    //Kaarten aanmaken:
    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
        //Elke kaart (de div) 2 keer toevoegen aan de array
        for (let j = 0; j < 2; j++) {
            let cardDiv = document.createElement("div");
            let cardFront = document.createElement("img");
            let cardBack = document.createElement("img");
            cardDiv.classList.add("card");
            cardDiv.classList.add(i.toString());
            cardDiv.appendChild(cardFront);
            cardDiv.appendChild(cardBack);
            cardFront.classList.add("front");
            cardBack.classList.add("back");
            cardFront.setAttribute("src", global.IMAGE_PATH_PREFIX + "kaart" + (i + 1) + global.IMAGE_PATH_SUFFIX);
            cardBack.setAttribute("src", global.IMAGE_PATH_PREFIX + "achterkant" + global.IMAGE_PATH_SUFFIX);
            arrayCards.push(cardDiv);
            cardFront.style.display = "none";
            cardBack.addEventListener("click", omdraaien);
        }
    }

    arrayCards.sort(shuffle);

    //Voeg de kaarten toe aan het speelveld
    for (let i = 0; i < arrayCards.length; i++) {
        speelveld.appendChild(arrayCards[i]);
    }

}

const omdraaien = (event) => {
    if (global.AANTAL_KLIKS < 2) {
        console.log("Kaart geklikt!");
        let card = event.target.parentNode;
        console.log("Geselecteerde kaart:", card);
        card.querySelector(".back").style.display = "none";
        card.querySelector(".front").style.display = "block";

        global.AANTAL_KLIKS++;
        if (global.AANTAL_KLIKS === 1) {
            global.EERSTE_KAART = card;
        } else if (global.AANTAL_KLIKS === 2) {
            global.TWEEDE_KAART = card;

            stopKlikken();

            if (match()) {
                setTimeout(verwijderKaarten, 500);
            } else {
                setTimeout(flipCardsBack, 1000);
            }
            global.AANTAL_KLIKS = 0;
        }
    }
}
const verwijderKaarten = () => {
    stopKlikken();
    global.EERSTE_KAART.style.visibility = "hidden";
    global.TWEEDE_KAART.style.visibility = "hidden";
}
const match = () => {
    if (global.EERSTE_KAART.querySelector(".front").src === global.TWEEDE_KAART.querySelector(".front").src) {
        return true;
    } else {
        return false;
    }
}

const flipCardsBack = () => {
    stopKlikken();
    global.EERSTE_KAART.querySelector(".back").style.display = "block";
    global.EERSTE_KAART.querySelector('.front').style.display = 'none';
    global.TWEEDE_KAART.querySelector('.back').style.display = 'block';
    global.TWEEDE_KAART.querySelector('.front').style.display = 'none';

}
const stopKlikken = () => {
    let speelveld = document.querySelector("#speelveld");
    if (speelveld.classList.contains("stopKlik")) {
        speelveld.classList.remove("stopKlik")
    } else {
        speelveld.classList.add("stopKlik");
    }
}

const shuffle = () => {
    return Math.random() - 0.5;
}

window.addEventListener("load", setup);