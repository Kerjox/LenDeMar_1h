
let imagen = null;
let z = 5;
let numberImages = 4;

window.addEventListener('mousemove', () => {

    if(imagen != null) {

        imagen.style.left = event.x - 50 + "px";
        imagen.style.top = event.y - 50 + "px";
        imagen.style.zIndex = z++;

    }

});

    



let selected = false;

window.addEventListener("click", () => {

        
    if (selected) {
        
        detectarColision();
        imagen = null;
        selected = false;
        
    }else{
        
        if (event.srcElement.tagName == "IMG" && (event.srcElement.className == "fruta" || event.srcElement.className == "cerilla")) {
            
            imagen = event.srcElement;
            selected = true;
            
        }
        
    }
    
});
    
function detectarColision() {
    
    let X = imagen.x;
    let Y = imagen.y;

    let x = trash_can.x;
    let y = trash_can.y;

    if (X - x < 280 && Y - y < 30 && X - x > 0 && Y - y > -70) {
        
        console.log("Colisión");

        if (numberImages == 0 && imagen.className == "cerilla") {

            imagen.style.display = "none";
            trash_can.src = "./src/img/fuego.png";
            reset.style.display = "";

        }else if(numberImages > 0 && imagen.className != "cerilla"){

            imagen.style.display = "none";
            numberImages--;
        }

    }

}