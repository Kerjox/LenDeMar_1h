let time = 100;

function cuentaAtras() {

    if(time == 50){

        clearInterval(cuentaAtrasInertval);

    }

    cuentaAtrasBar.style.width = (time - 50) / 50 * 100 + "%";
    reloj.innerHTML = time--;

}

window.addEventListener("load", () => {

    cuentaAtrasInertval = setInterval(cuentaAtras, 1000);

});