const setup = () => {
    let element = document.createElement("p");  // create een ElementNode
    element.setAttribute("class", "color"); // class toevoegen
    element.setAttribute("id", "txtPar");// id toevoegen

    console.log(element.getAttribute("class"))// wat zit er in het attribute class?

    let textNode = document.createTextNode("Hello world!"); //Create een TextNode // de tekst binnen een paragraaf --> textNode (7 soorten: vb element, text
    element.appendChild(textNode);
    document.querySelector("#myDiv").appendChild(element);// Voeg dit element toe aan mijn html pagina, zoek ik mijn html naar een element die noemt myDiv, hang aan dat element (element)

}
window.addEventListener("load", setup);