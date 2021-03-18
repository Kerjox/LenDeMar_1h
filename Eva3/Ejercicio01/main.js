const form = document.querySelector("body form");
let rango = document.querySelector("form input[type='range']");
let rangoValue = document.querySelector("form #rangoValue");

form.onsubmit = (e) => {

    e.preventDefault();
}

rango.onchange = () => {

    rangoValue.innerHTML = rango.value;
} 