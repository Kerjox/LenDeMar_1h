let buttonStart = document.getElementById('startTimer');
let buttonRotar = document.getElementById('rotar');
let buttonStop = document.getElementById('stopTimer')

posXimg = new Array("100px", "400px", "700px", "400px");
posYimg = new Array("700px", "1100px", "760px", "300px");


function startTimer() {

    buttonStart.style.display = "none";
    buttonRotar.style.visibility = "hidden";
    buttonStop.style.display = "";
    
    rotarInterval = setInterval(function() {
        rotar();
    }, 1000);

}


function stopTimer() {
    
    buttonStart.style.display = "";
    buttonRotar.style.visibility = "";
    buttonStop.style.display = "none";
    clearInterval(rotarInterval);

}


let cont = 1;

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