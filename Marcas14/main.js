const respuestas = [8, 1, 9, 0];
aciertos = new Array(respuestas.length).fill(0);

function comprobar(number) {

    if (numPregunta > 2) {

       if (number == respuestas[numPregunta - 3]) { // Comprobar acierto

            aciertos[numPregunta - 3] = 1;          // Meter 1 en el array

            if (numPregunta - 2 == respuestas.length) {
                
                if (checkPass()) {
                    
                    alert("Acertaste al contraseña");

                }else{

                    alert("Fallaste en algún valor de la contraseña");

                }

            } else {

                alert("Bien");
                pasarPreguntas(true);

            }
            

        } else {

            alert("Mal");
        
        } 

    }

    
}

function checkPass() {

    var cont = 0;
    
    for (let i = 0; i < aciertos.length; i++) {
        
        if (aciertos[i] == 1) {
            
            cont++;

        }
        
    }

    if(cont == 4){

        return true;

    }else{

        return false;

    }

}

let numPregunta = 1;

function pasarPreguntas(acierto) {

    let tecla = event.key;
    console.log("Tecla pulsada " + "'" + tecla + "'");
    
    if ((tecla == "s" || tecla == "S" || acierto) && numPregunta != 6) {
        
        hideAll();
        numPregunta++;
        let pregunta = "pregunta" + numPregunta;
        document.getElementById(pregunta).style.display = "";
        
    }else if ((tecla == "a" || tecla == "A") && numPregunta != 1) {
        
        hideAll();
        numPregunta--
        let pregunta = "pregunta" + numPregunta;
        document.getElementById(pregunta).style.display = "";
        
    }

    console.log("Número de pregunta " + "'" + numPregunta + "'");

}

function hideAll() {
    
    for (let i = 1; i < 7; i++) {
        let objeto = "pregunta" + i;
        document.getElementById(objeto).style.display = "none";        
        
    }

}