const setup = () => {
    let uls=document.getElementsByTagName("ul");
    uls[0].addEventListener("click", klik);

    let lis=document.getElementsByTagName("li");
    for (let i=0;i<lis.length;i++) {
        lis[i].addEventListener("click", klik);
    }

    let as=document.getElementsByTagName("a");
    for (let i=0;i<as.length;i++) {
        as[i].addEventListener("click", klik);
    }

};

// Hij vuurt het event af naar boven (hij gaat door de boom naar boven) (als hij voorouders heeft met hetzelfde event)

const klik = (event) => { // welke element heeft het veroorzaakt
    console.log("target is " + event.target.nodeName + ", currentTarget is " + event.currentTarget.nodeName);
    //target = het element die het heeft veroorzaakt
    //current target= met welk element is hij NU bezig

    // OPLOSSING OM DAT TE VOORKOMEN: als de currentTarget verschillend is van de target mag ij dat niet doen
};

window.addEventListener("load", setup);