let objeto = null;
z = 5;

function soltar() {

    objeto = null;
    
}

function cargar() {
    event.srcElement.tagName
    
    if (event.srcElement.tagName == "IMG") {

        objeto = event.srcElement;

    }
    

}


function mover() {

if (objeto != null) {
    
    objeto.style.left = event.x - 50 + "px";
    objeto.style.top = event.y - 50 + "px";
    objeto.style.zIndex = z++;
    
}
    event.returnValue = false;

    //console.log(event.x);
    

}