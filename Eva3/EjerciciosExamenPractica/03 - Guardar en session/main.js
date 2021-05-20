const doc = document;
const send = doc.querySelector("#send");
const user = doc.querySelector("#user");
const results = doc.querySelector("#results");
const ss = sessionStorage;
const db = openDatabase("pruebas01", "1.0", "Comentario", 2 * 1024 * 1024);

/* Listeners */

send.onclick = function (e) {
    
    readDB(user.value);
    showTable();
}

function readDB(name) {
    
    db.transaction(function (tx) {
        
        let query = "\
        SELECT * FROM compras c INNER JOIN productos p\
            on p.nombre = c.producto\
                WHERE c.usuario = " + "'" + name + "';";

        tx.executeSql(query, [], function (tx, resutados) { 

            let len = resutados.rows.length;

            for (let i = 0; i < len; i++) {

                ss.setItem(resutados.rows.item(i).producto, resutados.rows.item(i).cantidad);
            }
        });
    });
}

function showTable() { 

    let msg = "<table border=\"1\">"

    for (let i = 0; i < ss.length; i++) {

        msg += "\
        <tr>\
        <td>" + ss.key(i) + "</td>\
        <td>" + ss.getItem(ss.key(i)) + "</td>\
        </tr>";
    }

    msg += "</table>"
    results.innerHTML = msg;
}