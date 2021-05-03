function empezar(e) {
    
    console.log(e);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("data", e.target.getAttribute("id"));
    e.dataTransfer.setDragImage(e.target, 25, 25);
    console.log(e.dataTransfer.getData("data"));
    //e.dataTransfer.clearData("data");

    return true;
}

function allowDrop(ev) {
    
    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
/*
function dragOver(e) {
    
    let origin = e.dataTransfer.getData("data");
    let destination = e.getAttribute("id");
    console.log(origin + " - " + destination);
    //console.log(e);
    if (destination == "des1") {
        
        return false;
    }

    if ((destination == "des2") && (origin == "ar2")) {
        
        return false;
    }

    if ((destination == "des3") && (origin == "ar3")) {
        
        return false;
    }
}

function allowDrop(e) {
    
    e.preventDefault();
}

function drop(e) {
    
    e.preventDefault();
    let origin = e.originalEvent.dataTransfer.getData("data");
    console.log(e);
    e.target.appendChild(document.getElementById(origin));
    e.stopPropagation();
}

function drag(e) {

    e.dataTransfer.setData("data", e.target.id);
}
*/