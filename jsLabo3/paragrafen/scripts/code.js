const setup = () => {
    let pbelangrijk = document.getElementsByClassName("belangrijk");

    for (let i = 0; i < pbelangrijk.length; i++) {
        pbelangrijk [i].classList.add("opvallend");
        //  pbelangrijk [i].className+=" opvallend"; //--> spatie belangrijk!!  --> Voegt een STRING toe
    }


    //NIET ZO (is niet generiek):
    /*    let paragrafen = document.getElementsByClassName("p");
        paragrafen[1].className="belangrijk opvallend";
        paragrafen[3].className="belangrijk opvallend";*/
}
window.addEventListener("load", setup);