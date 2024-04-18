let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    IMAGE_PATH_PREFIX: "./images/", // map van de kaarten
    IMAGE_PATH_SUFFIX: ".png", // extensie van de kaarten
}
const setup = () => {
    let speelveld = document.getElementById("speelveld");
    let arrayCards = [];
    //Kaarten aanmaken:
    for (let i = 0; i < global.AANTAL_KAARTEN ; i++) {
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
            cardFront.setAttribute("src", global.IMAGE_PATH_PREFIX + "kaart" + (i + 1) + global.IMAGE_PATH_SUFFIX);
            cardBack.setAttribute("src", global.IMAGE_PATH_PREFIX + "achterkant" + global.IMAGE_PATH_SUFFIX);
            arrayCards.push(cardDiv);
        }
    }

    arrayCards.sort(shuffle);

    //Voeg de kaarten toe aan het speelveld
    for (let i = 0; i < arrayCards.length; i++) {
        speelveld.appendChild(arrayCards[i]);
    }
    for (let i = 0; i < arrayCards.length; i++) {
        arrayCards[i].addEventListener("click", omdraaien);
    }
}

const omdraaien = (event) => {
    // Zoek de afbeelding met de klasse "front" binnen de geklikte kaartdiv
    let frontImg = event.target.querySelector(".front");
    // Zoek de afbeelding met de klasse "back" binnen dezelfde kaartdiv
    let backImg = event.target.querySelector(".back");

    // Verwijder de klasse "front" van de frontImg en voeg "back" toe
    frontImg.classList.remove("front");
  backImg.classList.add("back");
}
const shuffle = () => {
    return Math.random() - 0.5;
}

window.addEventListener("load", setup);