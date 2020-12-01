let z = 5;
let cont = 0;
let imagen = null;
let resetButton = document.getElementById('reset');
let contador = document.getElementById('contador');
let numImages = 5;

window.addEventListener("mousedown", () =>{

        if (event.srcElement.className == "moneda" || event.srcElement.className == "billete10" || event.srcElement.className == "billete50") {

            //console.log(event.srcElement.className);
        
            imagen = event.srcElement;
        }
});

window.addEventListener("mousemove", () =>{

    if (!imagen) return;

    imagen.style.left = event.x - 50 + "px";
    imagen.style.top = event.y - 50 + "px";
    imagen.style.zIndex = z++;

});

window.addEventListener("mouseup", () => {

    if (!imagen) return;

    let X = imagen.x;
    let Y = imagen.y;

    let hucha = document.getElementById('hucha');

    let x = hucha.x;
    let y = hucha.y;

    if (X - x < 250 && Y - y < 30 && X - x > 50 && Y - y > -70) {

        switch (imagen.className) {
            case "moneda":
                cont += 1;
                break;
        
            case "billete10":
                cont += 10;
                break;
            case "billete50":
                cont += 50;
                break;
        }

        imagen.style.display = "none";

        contador.innerHTML = cont + "€";

        if (--numImages == 0) resetButton.style.display = "";

    }

    imagen = null;

});
    
    

resetButton.addEventListener('click', () => {

    location.reload();

});