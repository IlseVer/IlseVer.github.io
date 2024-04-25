const setup = () => {
    let start = new Date() // datum van op uw machine - system date
    console.log(start);

    //dag van de week
    console.log(start.getDay());  // zo kun je bepalen wanneer het vb weekend is, vb 6 en 0 is weekend

    //maand
    console.log(start.getMonth()+1); // +1, want januari is 0 en december 11
    //jaar
    console.log(start.getFullYear());
    //dag
    console.log(start.getDate());

    //
    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours() //fullYear is door alle browsers gekend, year niet
        + ":" + start.getMonth() + ":" + start.getSeconds());

    //datum zelf instellen
    let datum =  new Date(2024,0,7);
    console.log(datum);


    //toString:
    //ISO houdt geen rekening met in welke tijdzone je zit
    //ISO het is eerder een notatieconventie voor het weergeven van tijdstippen
    let event = new Date();
    console.log("toISOString "+ event.toISOString());
    console.log("toDateString " + event.toDateString());
    console.log("toTimeString " + event.toTimeString());

    console.log("toISOString "+ datum.toISOString());
    console.log("toDateString " + datum.toDateString()); //zit hier een tijdzone verder
    console.log("toTimeString " + datum.toTimeString());

}
window.addEventListener("load", setup);