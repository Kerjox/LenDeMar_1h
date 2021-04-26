const doc = document;
const ss = sessionStorage;
const productsCart = doc.querySelector("#productsCart");
const totalImport = doc.querySelector("#totalImport");
const content = doc.querySelector("#content");
let productCart;


window.onload = function () {
    
    //mostrar();
    showCart();
}

$("table button").click(function (e) {
    
    let id = $(this).attr("id");

    if (ss.getItem(id) > 0) {

        ss.setItem(id, parseInt(ss.getItem(id)) + 1);
    } else {

        ss.setItem(id, 1);
    }

    showCart();
});

function calcTotalProducts(e) {

    let totalProducts = 0;
    totalImport.innerHTML = "Total Productos: ";

    for (let i = 0; i < ss.length; i++) {

        totalProducts += parseInt(ss.getItem(ss.key(i)));
    }

    totalImport.innerHTML += totalProducts;
}

$("#reset").click(function (e) {
    
    ss.clear();
    showCart();
});

function showCart() {
    
    if (ss.length == 0) {

        productsCart.innerHTML = "Vacio";
        totalImport.innerHTML = "";
        
    } else {

        productsCart.innerHTML = "";
        
        for (let i = 0; i < ss.length; i++) {
            /*
            <div id="productCart">
                <div>Name</div>
                <button id="aa" class="remove">X</button>
            </div>
            */
            
            $("#productsCart").html("<div id='productCart'><div> Procducto: " + ss.key(i) + " ; Cantidad: " + ss.getItem(ss.key(i)) + "</div><button id='" + ss.key(i) + "' onclick='removeItem(" + ss.key(i) + ")'>X</button></div>");
        }
        calcTotalProducts();
    }


}

function removeItem(key) {
    
    let item = key.id;
    let value = parseInt(ss.getItem(item));
    value--;

    if (value > 0) {
        
        ss.setItem(item, value);
    } else {
        ss.removeItem(item);
    }

    showCart();
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