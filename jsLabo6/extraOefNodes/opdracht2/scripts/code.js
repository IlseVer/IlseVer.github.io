// • Itereer door elk <li> element en verander de klasse naar "listitem". Voeg een "style" tag toe die een regel instelt voor "listitem" om de kleur rood te maken.
// • Maak een nieuw "img" element en stel zijn "src" attribuut in op een foto van jou. Voeg dat element toe aan de pagina.

const setup = () => {
    let lstItems = document.querySelectorAll("li");
    let foto = document.createElement("img");

    for (let i = 0; i < lstItems.length; i++) {
        lstItems[i].setAttribute("class", "listitem"); //setAttribute, indien er al een andere klasse was, wordt deze nu overschreven
    }

    foto.src = "./images/appel.jpg";
    foto.alt = "appel";
    document.body.appendChild(foto);


}

window.addEventListener("load", setup);