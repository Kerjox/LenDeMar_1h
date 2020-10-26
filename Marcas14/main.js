function comprobar() {
    let objeto = event.srcElement;
    console.log(objeto);
}

let numPregunta = 1;

function pasarPreguntas() {
    console.log("Tecla presionada");
    let tecla = event.key;
    console.log(tecla);
    for (let i = 1; i < 7; i++) {
        let objeto = "pregunta" + i;
        document.getElementById(objeto).style.visibility = "hidden";        
        
    }

    console.log(numPregunta);

    if ((tecla == "s" || tecla == "S") && false) {

        numPregunta++;
        let pregunta = "pregunta" + numPregunta;
        document.getElementById(pregunta).style.visibility = "";

    }else if ((tecla == "a" || tecla == "A") && numPregunta != 1) {
        
        numPregunta--
        let pregunta = "pregunta" + numPregunta;
        document.getElementById(pregunta).style.visibility = "";

    }
}