const buttonSetAlarm = document.getElementById('setAlarm');
const inputAlarmHour = document.getElementById('alarmHours');
const inputAlarmMinutes = document.getElementById('alarmMinutes');
let alarmSeted = false;
let hora; let minuto;
let alarmHora; let alamMinuto;

function cambiarReloj() {
    
    let date = new Date();
    hora = date.getHours();
    minuto = date.getMinutes();
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
    
    if (segundo == 0) {
        
        checkAlarm()
    }

    setTimeout(() => {
        cambiarReloj();
    }, 1000);


}

function checkAlarm() {
    
    if (hora == alarmHora && minuto == alamMinuto) {
        
        document.getElementById('despetador').style.display = "";

    }

}

buttonSetAlarm.addEventListener("click", () => {

    if (alarmSeted) {

        buttonSetAlarm.innerText = "Set Alarm";
        buttonSetAlarm.className = "btn btn-success";

        inputAlarmHour.disabled = false;
        inputAlarmMinutes.disabled = false;

        alarmSeted = false;

    }else{
    
        alarmHora = Number(inputAlarmHour.value);
        alamMinuto = Number(inputAlarmMinutes.value);
    
        inputAlarmHour.disabled = true;
        inputAlarmMinutes.disabled = true;

        buttonSetAlarm.innerText = "Stop Alarm";
        buttonSetAlarm.className = "btn btn-danger";
    
        alarmSeted = true;
    }

});

window.addEventListener("load", () => {

    cambiarReloj();

});