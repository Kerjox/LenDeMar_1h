function toggleHeader() {
    var header2 = document.getElementById('header2')
    if (header2.style.display=="") {
        header2.style.display="none"
    }else {
        header2.style.display=""
    }
}

function changeSize(valor) {
    var tamaño = valor + "pt";
    document.getElementById('parrafo1').style.fontSize=tamaño;
}