const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtOutput = document.getElementById("txtOutput");
    let txtInput = document.getElementById("txtInput");
    let txtBegin = document.getElementById("txtBegin");
    let txtEinde = document.getElementById("txtEinde");

    let tekst = txtInput.value;   // uitlezen input element altijd .value, ander element --> .innerHTML
    let idxBegin=parseInt(txtBegin.value, 10);  //converteren naar een integer
    let idxEinde=parseInt(txtEinde.value, 10);

    let resultaat = tekst.substring(idxBegin, idxEinde);
    txtOutput.innerHTML=resultaat;
}

window.addEventListener('load',setup);


/*
p-element -> inhoud InnerHTML  <p id="txtTekst">dit is een test </p>

input-elememt -> inhoud Value  <input id="txtName" type="text">*/