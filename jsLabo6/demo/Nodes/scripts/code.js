const setup = () => {
    //selecting node
    let p = document.getElementById("para");
    //get node name en type:
    console.log(p.nodeName, p.nodeType); // P 1  // Die 1 in de console die je ziet , zie labo6 pag 6
    // 1 --> is een element node
    // Later handig : Als het gelijk is aan 1 dan kun je dingen toevoegen

    console.log(p.firstChild.nodeName, p.firstChild.nodeType); // #text 3

    console.log(p.firstElementChild.nodeName, p.firstElementChild.nodeType); // SPAN 1

    console.log(p.nextElementSibling.nodeName, p.nextElementSibling.nodeType); // P 1

    // JE KAN DOOR DE VOLLEDIGE BOOMSTRUCTUUR LOPEN


}
window.addEventListener("load", setup);