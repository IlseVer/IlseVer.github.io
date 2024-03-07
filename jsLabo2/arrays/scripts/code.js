const setup = () => {
    let familieleden = ["Suske", "Wiske", "Kiekeboe", "Jommeke", "Tintin"];
    console.log(familieleden.length);
    console.log(familieleden[0]);
    console.log(familieleden[2]);
    console.log(familieleden[4]);


    voegNaamToe(familieleden);
    console.log(familieleden);

    console.log(familieleden.join());
}

const voegNaamToe = (namen) => {
    let naam = window.prompt("Wat is uw naam", "onbekend");
    namen.push(naam);
    /*  for (let i = 0; i < namen.length; i++) {
          console.log(namen[i]);
      }*/

}
window.addEventListener("load", setup);
