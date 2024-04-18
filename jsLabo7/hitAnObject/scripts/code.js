// stap 1: knop maken en bom, op start klikken moet bom verdwijnen
// stap 2: ad random neemt andere image
// stap 3: de image doen bewegen
let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, //grootte van de figuur
    IMAGE_PATH_PREFIX: "./images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0,// id van de timeout timer, zodat we die kunnen annuleren
}
const setup = () => {
    console.log("loaded");
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startGame);
}
const startGame = () => {
    let target = document.getElementById("target");
    let btnStart = document.getElementById("btnStart");
    btnStart.remove();
    target.addEventListener("click", klik);
    move();


}
const klik = (ev) => {
    // if (this.className.indexOf("bom") != -1){
    // Get the element that triggered a specific event
    console.log(ev.target)
    if (ev.target.className.indexOf("bom") != -1) {
        //bom
        gameOver();
    } else {
        // geen bom
        hit();
        move();
    }
}

const gameOver = () => {
    alert("GAME OVER");

    // clearInterval(global.timeoutId);
}

const move = () => {

    let target = document.getElementById("target");
    let speelscherm = document.getElementById("playField");

    // maximale posities zijn afhankelijk van grootte speelscherm;

    let maxLeft = speelscherm.clientWidth - global.IMAGE_SIZE;
    let maxTop = speelscherm.clientHeight - global.IMAGE_SIZE;
    let getal = Math.floor(Math.random() * global.IMAGE_COUNT);

    // Bepalen als je op een bom geklikt hebt of niet:
    if (getal == 0) {
        // bom
        target.className = "bom";
    } else { //iets anders
        target.className = "";
    }
    target.setAttribute("src", global.IMAGE_PATH_PREFIX + getal + global.IMAGE_PATH_SUFFIX);

    target.style.left = Math.floor(Math.random() * maxLeft) + "px";
    target.style.top = Math.floor(Math.random() * maxTop) + "px";
    // start nieuwe timer:
    global.timeoutId = setTimeout(move, global.MOVE_DELAY);
}

const hit = () => {
    let aantalhits = document.getElementById("txtHits");
    global.score++;
    aantalhits.textContent = global.score.toString();
    clearInterval(global.timeoutId);

}

window.addEventListener("load", setup);


