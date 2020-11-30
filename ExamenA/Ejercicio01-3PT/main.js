let selected = false;
let z = 5;
let contador = 0;
let imagen = null;

window.addEventListener("click", () =>{

    if (selected) {
        
        selected = false;
        checkCollide();

    }else{

        if (event.srcElement.className == "moneda" || event.srcElement.className == "billete") {

            console.log(event.srcElement.className);
        
            imagen = event.srcElement;

            selected = true;
        }
        
    }


    
});

window.addEventListener("mousemove", () =>{

    if (!selected) return;

    imagen.style.left = event.x - 50 + "px";
    imagen.style.top = event.y - 50 + "px";
    imagen.style.zIndex = z++;

});

function checkCollide() {
    
    let X = imagen.x;
    let Y = imagen.y;

    let x = document.getElementById('hucha').x;
    let y = document.getElementById('hucha').y;

    if (X - x < 280 && Y - y < 30 && X - x > 0 && Y - y > -70) {

        switch (imagen.className) {
            case "moneda":
                contador += 1;
                break;
        
            case "billete":
                contador += 10;
                break;
        }

        imagen.style.display = "none";

        document.getElementById('contador').innerHTML = contador + "€";

    }
}