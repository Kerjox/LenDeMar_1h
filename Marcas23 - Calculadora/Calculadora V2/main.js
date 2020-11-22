let stringToCalculate = " ";
let solveBox = document.getElementById('displayResult');


window.addEventListener("load", () => {

    solveBox.placeholder = "0";

});

window.addEventListener("click", () => {

    button = event.srcElement;


    if (button.type != "button") return;

    if (button.value == "=") {
        if (solveBox.placeholder == "0") return;
        
        solveBox.value = eval(stringToCalculate);
        stringToCalculate = " ";
        return;

    }

    solveBox.value = "";

    solveBox.placeholder = stringToCalculate += button.value;

});