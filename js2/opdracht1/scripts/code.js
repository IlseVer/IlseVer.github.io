const setup = () => {
    window.alert("Dit is een mededeling");

    let bevestigen = window.confirm("Weet u het zeker?");
    console.log(bevestigen);     // resultaat : bij ok --> TRUE, bij annuleren --> FALSE

    let naam = window.prompt("Wat is uw naam", "onbekend");
    console.log(naam);
    //          resultaat:
    //          ok  --> ingevoerde naam komt in de console
    //          annuleren -->  null op console
}
window.addEventListener("load", setup);


