let stringToCalculate = "";
let ans = "";
let solveBox = document.getElementById('displayResult');

window.addEventListener("click", () => {

    button = event.srcElement;
    
    solveBox.value = "";

    if (button.type != "button") return;

    calculate(button.value);

});

window.addEventListener("keypress", () => {

    let key = event.key;
    
    if (isNaN(key)) {
    
        key = key.toLowerCase();
    }

        
    calculate(key);

});

function calculate(thing) {
    
    switch (thing) {

        case "enter":
        case "=":
            if (solveBox.placeholder == "0") return;
            solveBox.value = eval(stringToCalculate);
            ans = solveBox.value;
            stringToCalculate = "";
            break;
        case "c":
        case "CE":
            solveBox.placeholder = "0";
            stringToCalculate = "";
            break;

        case "a":    
        case "Ans":
            if (ans == "") break;
            solveBox.placeholder = stringToCalculate += ans;
            break;
    
        default:
            solveBox.placeholder = stringToCalculate += thing;
            break;
    }

}