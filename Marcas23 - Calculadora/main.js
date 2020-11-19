function operate() {
    let v1 = document.getElementById('value1').value;
    let o = document.getElementById('operator').value;
    let v2 = document.getElementById('value2').value;
    let containerSolve = document.getElementById('solve');

    switch (o) {
        case '+':
            solve = Number(v1) + Number(v2);
            break;
    
        case '-':
            solve = v1 - v2;
            break;
        
        case '*':
            solve = v1 * v2;
            break;
        
        case '/':
            solve = v1 / v2;
            break;
        
        case '%':
            solve = v1 % v2;
            break;
        
        default:
            solve = "Error";
            break;
    }

    console.log({
        valor1: v1,
        operator: o,
        value2: v2,
        solution: solve
    });

    containerSolve.value = solve;

}

operar.addEventListener("click", () => {


    console.log("Boton presionado");
    operate();

});