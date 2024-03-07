const setup = () => {
    let sliderRed = document.getElementById("sliderRed");
    let sliderGreen = document.getElementById("sliderGreen");
    let sliderBlue = document.getElementById("sliderBlue");

    // for (let i = 0; i < sliders.length; i++) {
    //     sliders[i].addEventListener("change", update);
    //     sliders[i].addEventListener("input", update);
    // }
    sliderRed.addEventListener("change", update);
    sliderRed.addEventListener("input", update);
    sliderGreen.addEventListener("change", update);
    sliderGreen.addEventListener("input", update);
    sliderBlue.addEventListener("change", update);
    sliderBlue.addEventListener("input", update);

}

const update = () => {
    let colorDemos = document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");

    let waardeRood = document.getElementById("red");
    let waardeGreen = document.getElementById("green");
    let waardeBlue = document.getElementById("blue");

    let redValue = sliders[0].value;
    let greenValue = sliders[1].value;
    let blueValue = sliders[2].value;

    waardeRood.innerHTML = redValue;
    waardeGreen.innerHTML = greenValue;
    waardeBlue.innerHTML = blueValue;
    colorDemos[0].style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
}

window.addEventListener("load", setup);