let retroceder = document.getElementById('retroceder');
let avanzar = document.getElementById('avanzar');
let dayNumber = 0;
let dayContainer = document.getElementById('dia');

let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

window.addEventListener("load", () =>{

    dayContainer.innerHTML = days[0];

});

retroceder.addEventListener("click", () => {

    changeDay(0);

});

avanzar.addEventListener("click", () => {

    changeDay(1);

});

function changeDay(direction) {
    
    if (direction) {
        
        if (dayNumber >= days.length - 1) dayNumber = -1;
            
        dayContainer.innerHTML = days[++dayNumber];

    }else{
        
        if (dayNumber <= 0) dayNumber = 7;
            
        dayContainer.innerHTML = days[--dayNumber];

    }

}