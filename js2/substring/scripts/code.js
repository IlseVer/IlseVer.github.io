const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", splitsen);
}

const splitsen = () => {
    let txtInput = document.getElementById("txtInput").value;
    let txtOutput = document.getElementById("txtOutput");
    let getal1 = document.getElementById("getal1");
    let getal2 = document.getElementById("getal2");

    let g1 = parseInt(getal1.value);
    let g2 = parseInt(getal2.value);

    let sub = txtInput.substring(g1, g2);
    txtOutput.innerHTML = sub;
}
window.addEventListener("load", setup);