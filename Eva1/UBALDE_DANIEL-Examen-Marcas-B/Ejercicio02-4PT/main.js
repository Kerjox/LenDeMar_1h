let posSemaforo = 1;
let verde = document.getElementById('1');
let amarillo = document.getElementById('2');
let rojo = document.getElementById('3');

window.addEventListener("load", () => {

    switchSemaforo();
    
});

function switchSemaforo() {

    switch (posSemaforo) {
        case 1:
            hideAll();
            verde.setAttribute("bgcolor", "green");
            posSemaforo = 2;
            setTimeout(() => {switchSemaforo()}, 10000);
            break;
        case 2:
            hideAll();
            amarillo.setAttribute("bgcolor", "orange");
            posSemaforo = 3;
            setTimeout(() => {switchSemaforo()}, 2000);
            break;

        case 3:
            hideAll();
            rojo.setAttribute("bgcolor", "red");
            posSemaforo = 1;
            setTimeout(() => {switchSemaforo()}, 7000);
            break;
    
        default:
            break;
    }
    
}

function hideAll() {
    
    verde.setAttribute("bgcolor", "50380a");
    amarillo.setAttribute("bgcolor", "50380a");
    rojo.setAttribute("bgcolor", "50380a");

}