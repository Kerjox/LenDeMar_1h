let negritaButton = document.getElementById("negritaButton");
let cursivaButton = document.getElementById("cursivaButton");
let subrayadoButton = document.getElementById("subrayadoButton");

function negrita(e) {
    
    document.execCommand("bold", false, null);
}

function cursiva(e) {
    
    document.execCommand("italic", false, null)
}

function subrayado(e) {
    
    document.execCommand("underline", false, null);
}


negritaButton.onclick = function(){negrita()};
cursivaButton.onclick = function () {cursiva()}
subrayadoButton.onclick = function () {subrayado();}