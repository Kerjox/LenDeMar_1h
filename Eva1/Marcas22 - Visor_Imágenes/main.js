let indexImage = 1;
let botonParar = document.getElementById('stop');

function cambiarImagen() {


    imagen.src = "./src/img/" + indexImage++ + ".jpg";

    if (indexImage > 3) {
        
        indexImage = 1;

    }
}

window.addEventListener("load", () => {

    cambiarImagenInterval = setInterval(cambiarImagen, 2000);

});

botonParar.addEventListener("click", () => {


    console.log("Boton presionado");
    clearInterval(cambiarImagenInterval);

});