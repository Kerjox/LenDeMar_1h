posXimg = new Array("100px", "400px", "700px", "400px");
posYimg = new Array("700px", "1100px", "760px", "300px");

let cont = 1;



function rotar() {

    for (let i = 1; i < 5; i++) {
        
        let indexImagen = "imagen" + i;
        imagen = document.getElementById(indexImagen);
            
            $(imagen).animate({ "top": posXimg[cont] }, "");
            $(imagen).animate({ "left": posYimg[cont] }, "");

            
        
        //imagen.style.top = posXimg[cont];
        //imagen.style.left = posYimg[cont];
        cont++;
            comprobarPos();

        
    }

    cont++;
    comprobarPos();

}

function comprobarPos(){

    if (cont > 3) {
        
        cont = 0;
        //clearInterval(pasarimagenes);
    }

}

function prueba() {
    
    imggg = document.getElementById('imagen1');
    $(imggg).animate({ "left": "50px" }, "");
}