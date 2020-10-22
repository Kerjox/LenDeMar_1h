function cambiar() {
    
    let parrafo1 = document.getElementById('b1');
    let parrafo2 = document.getElementById('b2');

    if (parrafo1.className == "bloque1") {

        let parrafo1Class = parrafo1.className;
        parrafo1.className = parrafo2.className;
        parrafo2.className = parrafo1Class;

    } else {

        let parrafo2Class = parrafo2.className;
        parrafo2.className = parrafo1.className;
        parrafo1.className = parrafo2Class;

    }


}