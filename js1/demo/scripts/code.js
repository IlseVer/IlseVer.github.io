const setup = () => {
    let lblcursus = document.getElementById("lblCursus");
    lblcursus.addEventListener("mouseover", change);

/*    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("Click", show);

    Hieronder de verkorte versie:                                */
    document.getElementById("btnSend").addEventListener("click", show);
}
const show = () =>{
    console.log ("show");
    let txtName = document.getElementById("txtName");

    if(txtName.value != "")
    {
        alert("jouw naam is " + txtName.value);

       // console.log("jouw naam is " + txtName.value);
        console.log(`jouw naam is $(txtName.value)`);
    }
    else
    {
        alert("Gelieve naam in te vullen");
    }
}
const change = () => {
    let lblcursus = document.getElementById("lblCursus");
    lblcursus.className="cursus";
}

window.addEventListener("load", setup);