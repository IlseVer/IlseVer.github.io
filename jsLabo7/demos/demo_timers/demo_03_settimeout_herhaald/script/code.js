let timerId=0;

const initialize = () => {
    let btnStop=document.getElementById("btnStop");
    btnStop.addEventListener("click", stopTimer);
    timerId=setTimeout(timerTick, 1000);
}

const timerTick = () => {
    let output=document.getElementById("output");
    output.innerHTML+=" tick";
    timerId=setTimeout(timerTick, 1000);  //terug dezelfde functie oproepen, eigenlijk is niet de bedoeling: aangeraden om dan setInterval te gebruiiken
}

const stopTimer = () => {
    clearTimeout(timerId);
}

window.addEventListener("load", initialize);