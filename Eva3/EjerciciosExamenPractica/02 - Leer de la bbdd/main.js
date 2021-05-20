const doc = document;
const send = doc.querySelector("#send");
const user = doc.querySelector("#user");
const results = doc.querySelector("#results");
const db = openDatabase("pruebas01", "1.0", "Comentario", 2 * 1024 * 1024);

/* Listeners */

send.onclick = function (e) {
    
    readDB(user.value);
}

function readDB(name) {
    
    db.transaction(function (tx) {
        
        let query = "\
        SELECT * FROM compras c INNER JOIN productos p\
            on p.nombre = c.producto\
                WHERE c.usuario = " + "'" + name + "';";

        tx.executeSql(query, [], function (tx, resutados) { 

            let len = resutados.rows.length;
            let msg = "<table>";

            for (let i = 0; i < len; i++) {

                msg += "<tr>\
                <td>" + resutados.rows.item(i).usuario + "</td>\
                <td>" + resutados.rows.item(i).producto + "</td>\
                <td>" + resutados.rows.item(i).cantidad + "</td>\
                </tr>";
            }

            msg += "</table>";
            results.innerHTML = msg;
        });
    });
}