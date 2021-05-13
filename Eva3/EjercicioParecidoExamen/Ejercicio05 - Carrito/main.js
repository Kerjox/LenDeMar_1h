const doc = document;
const ss = sessionStorage;
const productsCart = doc.querySelector("#productsCart");
const totalImport = doc.querySelector("#totalImport");
const content = doc.querySelector("#content");
const reset = doc.querySelector("#reset");
const botonTabla = doc.querySelector("table button");
const saveButton = doc.querySelector("#saveCart");

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

reset.onclick = function (e) {
    
    ss.clear();
    showCart();
}

function showCart() {
    
    if (ss.length == 0) {

        productsCart.innerHTML = "Vacio";
        totalImport.innerHTML = "";
        
    } else {

        let tablaProductos = "<table border=\"1\" class=\"cartProducts\">";
        tablaProductos += "<tr><th>Nombre</th><th>Cantidad</th><th>Borrar</th></tr>";
        
        for (let i = 0; i < ss.length; i++) {
            
            tablaProductos += "<tr>";
            tablaProductos += "<td cellpadding=\"20\">" + ss.key(i) + "</td><td>" + ss.getItem(ss.key(i)) + "</td><td><button onclick=\"removeItem(" + ss.key(i) + ")\">X</button></td>";
            tablaProductos += "</tr>";
        }

        tablaProductos += "</table>";
        productsCart.innerHTML = tablaProductos;
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
/*
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
*/
saveButton.onclick = function () {
    
    console.log("Save Cart");
    saveCart();
}

function saveCart(){

    if (ss.length == 0) return;
        
    let db = openDatabase("carrito_data", "1.0", "Comentario", 2 * 1024 * 1024); //openDatabase("nombreBBDD", "1.0", "comentario", memoria)
    db.transaction(function(tx){
        tx.executeSql("DROP TABLE IF EXISTS datos;");
        tx.executeSql("CREATE TABLE datos(nombre, cantidad);");

        for (let i = 0; i < ss.length; i++) {
            
            let sql = "INSERT INTO datos VALUES('" + ss.key(i) + "', " + ss.getItem(ss.key(i)) + ");";
            console.log(sql);
            tx.executeSql(sql);
        }
    });
}