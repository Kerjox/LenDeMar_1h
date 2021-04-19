const doc = document;
const ss = sessionStorage;
const content = doc.querySelector("#content");


window.onload = function () {
    
    mostrar();
}
    


function mostrar() {
    
    content.innerHTML = ss.length;
    ss.setItem("Kerjox", 18);

    content.innerHTML += "<br>" + ss.length;
    content.innerHTML += "<br>" + ss.key(0);
    content.innerHTML += " " + ss.getItem(ss.key(0));
    ss["Juan"] = 30;
    content.innerHTML += "<br>" + ss.length;
    ss.removeItem(ss.key(1));
    content.innerHTML += "<br>" + ss.key(1);
    ss.clear();
    content.innerHTML += "<br>" + ss.length;
}