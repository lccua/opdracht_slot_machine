// een globale variabele met de urls van alle afbeeldingen
const urls = ["images/fruit01.jpg", "images/fruit02.jpg", "images/fruit03.jpg", "images/fruit04.jpg", "images/fruit05.jpg"];

const setup = () => {

    setInitialImages()
    let button = document.getElementsByClassName("buttonLink")[0]
    button.addEventListener("click", spin)

}

const setInitialImages = () => {
    let images = document.querySelectorAll("img")

    for (let i = 0; i < images.length; i++) {
        const randomNumber = Math.floor(Math.random() * urls.length);
        const url = urls[randomNumber];
        images[i].src = url;
    }
};

const spin = () =>{

    let images = document.querySelectorAll("img")

    for (let i = 0; i < images.length; i++) {
        const randomNumber = Math.floor(Math.random() * urls.length);
        const url = urls[randomNumber];
        images[i].src = url;
    }
    // Check if all images are the same
    const areAllImagesTheSame = images[0].src === images[1].src && images[0].src === images[2].src;

    // Print corresponding message based on the result
    let text = "";
    if(areAllImagesTheSame){
        text = "You won!!!!!!!"
    }
    else{
        text = "You Lost!"
    }

    let printText = document.getElementById("printText")

    printText.textContent = text;

    console.log(text);

}
window.addEventListener("load", setup);


