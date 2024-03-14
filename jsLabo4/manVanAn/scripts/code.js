const setup = () => {
    let btnZoeken = document.getElementById("btnZoeken");
    let txtAantal = document.getElementById("txtAantal");
    btnZoeken.addEventListener("click", zoeken);
}
const zoeken = () => {
    let txtTekst = document.getElementById("txtTekst");
    let tekst = txtTekst.value.toLowerCase();

    let txtZoekTekst = document.getElementById("txtZoekTekst");
    let zoekTekst = txtZoekTekst.value.toLowerCase();

    let aantal = telVoorkomens(tekst, zoekTekst);
    txtAantal.textContent = aantal;
}

const telVoorkomens = (tekst, zoekTekst) => {
    let result = 0;
    let idx = tekst.indexOf(zoekTekst);
    while (idx != -1) {
        result++;
        idx = tekst.indexOf(zoekTekst, idx + zoekTekst.length);
    }
    return result;

}
window.addEventListener("load", setup);