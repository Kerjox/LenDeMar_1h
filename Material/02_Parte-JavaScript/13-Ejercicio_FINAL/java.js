imagen = new Array();
imagen[0] = "./imagenes/0.jpg";
imagen[1] = "./imagenes/1.jpg";
imagen[2] = "./imagenes/2.jpg";
imagen[3] = "./imagenes/3.jpg";
imagen[4] = "./imagenes/4.jpg";
imagen[5] = "./imagenes/5.jpg";
imagen[6] = "./imagenes/6.jpg";
imagen[7] = "./imagenes/7.jpg";
imagen[8] = "./imagenes/8.jpg";
imagen[9] = "./imagenes/9.jpg";

valor = new Array();
valor[0] = "0504a6e0889debcd660b482aea69283977695ca1f71b363d51523c4be75da75a";
valor[1] = "03cfa2db227990b5dcea544378fa9f43dde77dc2cb01b1def25432ff11de6d20";
valor[2] = "fb3e47983577b534993735f9377baaf61cfe0e339579fdb6d394525f0be032fe";
valor[3] = "481471affab3bf67433044f750159b9ae1267a2e139c531d3f78d8ca30487bc3";
valor[4] = "be19becb4bf7d3251afb1346a8276b54500392e5f6430566649ff9c5c10f3848";
valor[5] = "16efe0ab05add3c5e42f0270b81c46c52767fac288b2a93b1d634fbe90a65b38";
valor[6] = "1c56659e2fd3c78472743a0a2ceaba18cd84661ef3719f3e9c1bf8fd689a871d";
valor[7] = "48207fef798021b752e32336bd06c02cb1174dc4eb5a12320ceb6ee79df1c42b";
valor[8] = "c11ce6937e9778b71281a42733c6b7fe9d59e3b851e264446099865f0f7009ee";
valor[9] = "b7fcc259a226783daa0ef514fa080009b881f7986440ff4e676b58f084d54212";

var i = 2;
var numero;
var solucion;

window.onkeydown = tecla

function tecla() {
    t = event.keyCode
    if (t == 13) {
        comprobar();
    }
}

function cambiar() {
    numero = Math.floor(Math.random() * (10));
    solucion = valor[numero];
    document.getElementById("img").src = imagen[numero];
    document.getElementById("sol").focus();
}

function comprobar() {
    if (document.getElementById("sol").value == "") {
        window.alert("El campo no puede estar vacio");
    } else {
        if (i == 0) {
            window.alert("Te has quedado sin intentos");
            window.location = "fail.html";
        } else {
            if (solucion == sha256.hmac('patata', btoa(document.getElementById("sol").value))) {
                window.alert("Correcto");
                window.location = "correcto.html";
            }
            else {
                window.alert("Te quedan " + i + " intentos");
                cambiar();
                document.getElementById("sol").value = "";
                i = i - 1;
            }
        }
    }
}

//Formulario

var sexo = 0;

function validar() {
    if (document.getElementById("nombre").value == "" || document.getElementById("apellido").value == "" || document.getElementById("edad").value == "..." || sexo == 0) {

    } else {
        ventana = window.open("", "Ventana", "top=50,left=200,height=300,width=400");
        ventana.document.write("<html><head><title>Pagina</title></head><body><h1>Has sido registrado " + document.getElementById("nombre").value + "</h1</body></html>");
        //document.getElementById("color").value 
    }


}