posXimg = new Array("100px", "400px", "700px", "400px");
posYimg = new Array("700px", "1100px", "760px", "300px");

let cont = 1;

function startTimer() {

    document.getElementById('startTimer').style.display = "none";
    document.getElementById('rotar').style.display = "none";
    document.getElementById('stopTimer').style.display = "";
    
    rotarInterval = setInterval(function() {
        rotar();
    }, 1000);

}

function stopTimer() {
    
    document.getElementById('startTimer').style.display = "";
    document.getElementById('rotar').style.display = "";
    document.getElementById('stopTimer').style.display = "none";
    clearInterval(rotarInterval);

}

function rotar() {

    for (let i = 1; i < 5; i++) {
        
        let indexImagen = "imagen" + i;
        imagen = document.getElementById(indexImagen);
            
        $(imagen).animate({ "top": posXimg[cont], "left": posYimg[cont] });

        cont++;
        comprobarPos();
        
    }

    cont++;
    comprobarPos();

}

function comprobarPos(){

    if (cont > 3) {
        
        cont = 0;

    }

}

function prueba() {
    
    imggg = document.getElementById('imagen1');
    $(imggg).animate({ "left": "50px" }, "");

}