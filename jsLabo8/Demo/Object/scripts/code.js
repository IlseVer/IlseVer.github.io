const setup = () => {
    //Create an object

    // 1e methode
    let student = {}; // een leeg object
    student.firstName = "Ilse";
    student.lastName = "Verhaeghe";
    student.age = new Date(2000, 1, 1);
    student.eyeColor = ("Brown");
    console.log(student.firstName);

    //2e methode
    // Javascript Object Literal is a data type used to define objects in JavaScript.
    //It is a syntax for creating an object in JavaScript that composed of key-value pairs
    let student1 = {// een leeg object
        firstName: "Ilse",
        lastName: "Verhaeghe",
        age: new Date(2000, 1, 1, 0, 10, 30),
        eyeColor: ("Brown"),
    }
    console.log(student1.firstName);
    console.log(student1.age);

    // converteren naar een String:
    //Object literal wegschrijven, altijd stringify gebruiken
    // Obecjten dat je aanmaakt en je wil ze bewaren, opslaan in een String met stringify, als je ze terug nodig hebt, terug converteren
    let text = JSON.stringify(student1);
    console.log(text);


    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address: {         // binnen object nog een object aanmaken
            zipCode: 8500,
            city: "Kortrijk"
        }
    }
    console.log(student2.address.zipCode);

    let tekst = JSON.stringify(student);
    console.log (tekst);

    tekst = JSON.stringify(student2);
    console.log (tekst);

    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];
// omzetten script-object naar een JSON-object
    tekst = JSON.stringify(students);

    console.log (tekst);
// omzetten JSON-object naar script-object
    let tekstJS = JSON.parse(tekst);
    console.log ("JsonParse " + tekstJS[0].firstName);


    tekst = JSON.stringify(students[1]);
    console.log (tekst);
}
window.addEventListener("load", setup);