var cont = 1;

function change() {    

    objeto = event.srcElement;

    if (objeto.className == "") {
        
        if (cont % 2 == 0) {
            objeto.className = "circle";
            objeto.innerHTML = "<img src='./src/images/circle.svg' class='ficha'></img>";
        } else {
            objeto.className = "triangle";
            objeto.innerHTML = "<img src='./src/images/triangle.svg' class='ficha'></img>";
        }
        
        cont++;
    } else {
        
        window.alert("Ya hay un elemento puesto");

    }

}

