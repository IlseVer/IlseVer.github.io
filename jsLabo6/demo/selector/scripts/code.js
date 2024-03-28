const setup = () => {
    // let lstPar = document.getElementsByClassName("color");
    let lstParDiv = document.querySelectorAll("#myDIV > .color");
    /*    for (let i = 0; i < lstPar.length; i++) {
            lstPar[i].addEventListener("click", change)
        }*/
    for (let i = 0; i < lstParDiv.length; i++) {
        lstParDiv[i].addEventListener("click", changeDiv);// 2 elementen --> aan alle 2 gaat hij een klik-event koppelen
    }
// welk element heeft het klik-event veroorzaakt?
}


const change = (e) => { // Hier gaat hij doorgeven welk element het klikevent heeft verooraakt
    e.target.className = "colorPar";
}

const changeDiv = (event) => {   // naam event(doet er niet toe hoe je het noemt), je weet nu op welk element er geklikt is
    event.target.className = "colorParDiv";// het element die het event heeft veroorzaakt, en daar wil ik de property naam claas wijzigen naar colorpardiv

}

window.addEventListener("load", setup);