const doc = document;
const ss = sessionStorage;
const productsCart = doc.querySelector("#productsCart");
const totalImport = doc.querySelector("#totalImport");
const content = doc.querySelector("#content");
const reset = doc.querySelector("#reset");
const botonTabla = doc.querySelector("table button");
const saveButton = doc.querySelector("#saveCart");
const user = doc.querySelector("#user");
const db = openDatabase("pruebas01", "1.0", "Comentario", 2 * 1024 * 1024);

/* Listeners */
window.onload = function () {
    
    generateBD();
    showCart();
}

saveButton.onclick = function () {
    
    console.log("Save Cart");
    saveToBD();
}

reset.onclick = function (e) {
    
    ss.clear();
    clearDB();
    showCart();
}

function clearDB(e) {
    
    db.transaction(function(tx){

        let query = "DELETE FROM compras WHERE usuario = '" + user.value + "'";
        tx.executeSql(query);
    });
    
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

function showCart() {
    
    if (ss.length == 0) {

        productsCart.innerHTML = "Vacio";
        totalImport.innerHTML = "0";
        
    } else {

        let tablaProductos = "<table border=\"1\" class=\"cartProducts\">";
        tablaProductos += "<tr><th>Nombre</th><th>Cantidad</th><th>Borrar</th></tr>";
        
        for (let i = 0; i < ss.length; i++) {
            
            tablaProductos += "<tr>\
            <td cellpadding=\"20\">" + ss.key(i) + "</td>\
            <td>" + ss.getItem(ss.key(i)) + "</td>\
            <td><button onclick=\"removeItem(" + ss.key(i) + ")\">X</button></td>\
            </tr>";
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

function saveToBD() {
        
    db.transaction(function(tx){

        for (let i = 0; i < ss.length; i++) {
        
            let sql = "INSERT INTO compras VALUES('" + user.value + "', '" + ss.key(i) + "', " + ss.getItem(ss.key(i)) + ");";
            console.log(sql);
            tx.executeSql(sql);
        } 
    });

    console.log("BBDD generada");
}

function generateBD() {
        
    db.transaction(function(tx){

        tx.executeSql("DROP TABLE IF EXISTS productos;", [], function() {

            tx.executeSql("CREATE TABLE productos (nombre, descripcion);", [], function() {

                tx.executeSql("INSERT INTO productos VALUES (\'Acer\', \'Odenador Acer\');");
                tx.executeSql("INSERT INTO productos VALUES (\'Apple\', \'Odenador Apple\');");
                tx.executeSql("INSERT INTO productos VALUES (\'Dell\', \'Odenador Dell\');");
                tx.executeSql("INSERT INTO productos VALUES (\'PB\', \'Odenador PB\');");
                tx.executeSql("INSERT INTO productos VALUES (\'Sony\', \'Odenador Sony\');");
            });
        });
        tx.executeSql("CREATE TABLE compras(usuario, producto, cantidad);");
    });

    console.log("BBDD generada");
}