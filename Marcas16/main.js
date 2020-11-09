
imagen = null;
z = 5;
let numberImages = 4;

function mover(){

    if(imagen != null) {

        imagen.style.left = event.x - 50 + "px";
        imagen.style.top = event.y - 50 + "px";
        imagen.style.zIndex = z++;

    }

}

let selected = false;

function cargarImagen() {

    if (selected) {

        detectarColision();
        imagen = null;
        selected = false;
        numberImages--;

        if (numberImages == 0) {
                        
            document.getElementById('reset').style.display = "";

        }

    }else{

        if (event.srcElement.tagName == "IMG" && event.srcElement.getAttribute('class') == "fruta") {
            
            imagen = event.srcElement;
            selected = true;

            

        }

    }

}


function detectarColision() {
    
    let X = imagen.x;
    let Y = imagen.y;

    let x = trash_can.x;
    let y = trash_can.y;

    if (X - x < 280 && Y - y < 30 && X - x > 0 && Y - y > -70) {
        
        console.log("Colisión");
        imagen.style.display = "none";

        

    }

}