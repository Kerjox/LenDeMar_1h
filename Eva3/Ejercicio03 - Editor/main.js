const doc = document;
const negritaButton = doc.querySelector("#negritaButton");
const cursivaButton = doc.querySelector("#cursivaButton");
const subrayadoButton = doc.querySelector("#subrayadoButton");
const alignLeft = doc.querySelector("#alignLeft");
const alignCenter = doc.querySelector("#alignCenter");
const alignRight = doc.querySelector("#alignRight");
const alignAll = doc.querySelector("#alignAll");
const disorderedList = doc.querySelector("#disorderedList");
const orderedList = doc.querySelector("#orderedList");
const subi = doc.querySelector("#subi");
const supi = doc.querySelector("#supi");
const fontColor = doc.querySelector("#fontColor");
const backGroundColor = doc.querySelector("#backGroundColor");
const insertImage = doc.querySelector("#insertImage");
const insertHyperlink = doc.querySelector("#insertHyperlink");
const publish = doc.querySelector("#publish");
const text = doc.querySelector("#text");
const publishedtext = doc.querySelector("#message");

function negrita(e) { doc.execCommand("bold", false, null);}

function cursiva(e) { doc.execCommand("italic", false, null);}

function subrayado(e) { doc.execCommand("underline", false, null);}

function align(e) {
    
    switch (e) {

        case 0:
            
            doc.execCommand("justifyleft", false, null);
            break;

        case 1:
            
            doc.execCommand("justifycenter", false, null);
            break;

        case 2:
            
            doc.execCommand("justifyright", false, null);
            break;

        case 3:
            
            doc.execCommand("justifyall", false, null);
            break;
    
        default:
            break;
    }
}

function disorderlist(e) { doc.execCommand("insertunorderedlist" , false, null);}

function orderedlist(e) { doc.execCommand("insertorderedlist" , false, null);}

function subI(e) { doc.execCommand("subscript" , false, null);}

function supI(e) { doc.execCommand("superscript" , false, null);}

function fontcolor(e) {

    let color = prompt("Introduce el color");
    doc.execCommand("forecolor", false, color);
}

function background(e) {
    
    let color = prompt("Introduce el color");
    doc.execCommand("backcolor", false, color);
}

function insertimage(e) {
    
    let img = prompt("Pon la ruta de la imagen");
    doc.execCommand("insertimage", false, img);
}

function inserthyperlink(args) {
    
    let url = prompt("Introduce la url", "https://");
    doc.execCommand("createlink", false, url);
}

function publishtext(e) {
    
    let content = text.innerHTML;
    publishedtext.innerHTML += (content + "<br></br>");
}

negritaButton.onclick = function() {negrita();}
cursivaButton.onclick = function () {cursiva();}
subrayadoButton.onclick = function () {subrayado();}
alignLeft.onclick = function () {align(0);}
alignCenter.onclick = function () {align(1);}
alignRight.onclick = function () {align(2);}
alignAll.onclick = function () {align(3);}
disorderedList.onclick = function () {disorderlist();}
orderedList.onclick = function () {orderedlist();}
subi.onclick = function () {subI();}
supi.onclick = function () {supI();}
fontColor.onclick = function () {fontcolor();}
backGroundColor.onclick = function () {background();}
insertImage.onclick = function () {insertimage();}
insertHyperlink.onclick = function () {inserthyperlink();}
publish.onclick = function () {publishtext();}