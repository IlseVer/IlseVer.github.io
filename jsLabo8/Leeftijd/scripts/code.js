const setup = () => {
    let datumVandaag = new Date();// systeemdatum
    let geboortedatum = new Date(1983,10,15,1,1,1);
    let aantalMilliseconden = datumVandaag-geboortedatum;
    let aantalDagen = aantalMilliseconden/(1000*60*60*24);
    console.log(aantalDagen);
    console.log(geboortedatum.getDay());

    //oplossing
    let toDay = new Date();
    let birthday = new Date(2020,0,1,23,50,12);
    console.log(birthday);

    let milliseconden = toDay-birthday;
    console.log(milliseconden);
    let oneDay = 1000*60*60*24;
    let countdate = milliseconden/(oneDay);
   console.log("Aantal dagen: "+ parseInt(countdate));
}
window.addEventListener("load", setup);