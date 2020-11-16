function reloj() {
    setInterval(cambiarReloj, 1000);
}

function cambiarReloj() {
    let date = new Date();
    let hora = date.getHours();
    let minuto = date.getMinutes();
    let segundo = date.getSeconds();
    let horaStr = "";

    horaStr = (hora < 10) ? "0" + hora : hora;
    horaStr += ":" + minuto + ":" + segundo;

    console.log({
        hora: hora,
        minuto: minuto,
        segundo: segundo, 
        horaStr: horaStr
    });

    caja.value = date;
    document.getElementById('reloj').innerHTML = horaStr;
}