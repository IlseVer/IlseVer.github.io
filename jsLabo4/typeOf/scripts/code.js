const setup = () => {
    console.log(typeof 42);
// Expected output: "number"

    console.log(typeof 'blubber');
// Expected output: "string"

    console.log(typeof true);
// Expected output: "boolean"

    console.log(typeof undeclaredVariable);
// Expected output: "undefined"

    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk=true;
    let vandaag = new Date();
    const print = (message) => {
        console.log(message);
    }
    console.log(typeof leeftijd);
    console.log(typeof intrest);
    console.log(typeof isGevaarlijk);
    console.log(typeof vandaag);
    console.log(typeof print);


}
window.addEventListener("load", setup);