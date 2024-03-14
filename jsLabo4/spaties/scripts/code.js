const setup = () => {
    let btnSpaties = document.getElementById("btnspaties");
    btnSpaties.addEventListener("click", omzettenInSpaties);
}
const omzettenInSpaties = () => {
    let txtInput = document.getElementById("txtInput"); //waarde input-element ophalen is met value
    let output = document.getElementById("output"); //output op webpagina
    let tekst = txtInput.value;
    let tekstMetSpaties = "";

    for (let i = 0; i < tekst.length; i++) {
        tekstMetSpaties += tekst.charAt(i);
        tekstMetSpaties += " ";
    }
    console.log(tekstMetSpaties);
    output.textContent = tekstMetSpaties;
}

window.addEventListener("load", setup);