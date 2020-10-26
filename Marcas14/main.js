function comprobar() {
    let objeto = event.srcElement;
    console.log(objeto);
}

let numPregunta = 1;

function pasarPreguntas() {

    
    let tecla = event.key;
    console.log("Tecla pulsada " + "'" + tecla + "'");
    
    if ((tecla == "s" || tecla == "S") && numPregunta != 6) {
        
        hideAll();
        numPregunta++;
        let pregunta = "pregunta" + numPregunta;
        document.getElementById(pregunta).style.visibility = "";
        
    }else if ((tecla == "a" || tecla == "A") && numPregunta != 1) {
        
        hideAll();
        numPregunta--
        let pregunta = "pregunta" + numPregunta;
        document.getElementById(pregunta).style.visibility = "";
        
    }

    console.log("Número de pregunta " + "'" + numPregunta + "'");

}

function hideAll() {
    
    for (let i = 1; i < 7; i++) {
        let objeto = "pregunta" + i;
        document.getElementById(objeto).style.visibility = "hidden";        
        
    }

}