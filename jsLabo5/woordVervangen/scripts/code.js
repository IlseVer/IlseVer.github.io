//Oplossing
const vervangAlles = (bronTekst, oud, nieuw) => {
    let result = bronTekst;
    let idx = result.indexOf(oud);
    while (idx != -1) {
        // Neem bijvoorbeeld "Gisteren zat de jongen io de stoep

        // bereken het stuk VOOR de gevonden tekst
        let voor = result.slice(0, idx);

        // bereken het stuk NA de gevonden tekst
        let na = result.slice(idx + oud.length, result.length);

        // we vervangen de gevonden tekst door de stukken ..
        result = voor + nieuw + na;

        // de nieuwe tekst staat nu op positie idx in result...
        idx = result.indexOf(oud, idx + nieuw.length);
    }
    return result;
}

const setup = () => {
    let inputTekst = "Gisteren zat de jongen op de stoep en at de helft van de appel op ";
    //let inputTekst="de man riep de";

    let outputTekst = vervangAlles(inputTekst, "de", "het");
    console.log(outputTekst);
}
window.addEventListener("load", setup);