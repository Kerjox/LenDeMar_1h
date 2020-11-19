window.addEventListener("load", () => {

    setInterval(() => {
        cambiarReloj();
    }, 1000);

});

function cambiarReloj() {

    let date = new Date();
    let hora = date.getHours();
    let minuto = date.getMinutes();
    let segundo = date.getSeconds();
    let horaStr = "";

    horaStr = (hora < 10) ? "0" + hora : hora;
    horaStr += (minuto < 10) ? ":0" + minuto : ":" + minuto;
    horaStr += (segundo < 10) ? ":0" + segundo : ":" + segundo;

    console.log({
        hora: hora,
        minuto: minuto,
        segundo: segundo, 
        horaStr: horaStr
    });

    horaBar.style.width = hora / 24 * 100 + "%";
    minutoBar.style.width = minuto / 60 * 100 + "%";
    segundoBar.style.width = segundo / 60 * 100 + "%";

    caja.value = date;
    document.getElementById('reloj').innerHTML = horaStr;
}