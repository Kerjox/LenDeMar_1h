//Ejercicio 1

empresas = new Array();
empresas[0] = "./imagenes/caf.jpg";
empresas[1] = "./imagenes/aje.jpg";
empresas[2] = "./imagenes/camara.jpg";
empresas[3] = "./imagenes/bsh.jpg";
empresas[4] = "./imagenes/ayto.jpg";

linkempresas = new Array();
linkempresas[0] = "https://www.caf.es/es";
linkempresas[1] = "https://www.ajearagon.com/";
linkempresas[2] = "https://www.camararagoza.com/";
linkempresas[3] = "https://www.bsh-group.com/laender/es/";
linkempresas[4] = "https://www.zaragoza.es/sedeelectronica/";

var rep1;

function mostrar() {
  numero = Math.floor(Math.random() * 5);
  if (numero == rep1) {
    mostrar();
  } else {
    rep1 = numero;
    document.getElementById("linkpie").href = linkempresas[numero];
    document.getElementById("imgpie").src = empresas[numero];
    temp1 = setTimeout("mostrar()", 500);
  }
}


//Ejercicio 2

function mes() {
  document.getElementById("sep").style.display = "none";
  document.getElementById("oct").style.display = "none";
  document.getElementById("nov").style.display = "none";
  document.getElementById("dic").style.display = "none";
  document.getElementById(document.getElementById("mes").value).style.display = "";
}

//Ejercicio 3

function curs() {
  document.getElementById("radio").style.display = document.getElementById("cursillo").value;
}
function fech() {
  if (document.getElementById("fecha").value > "1997") {
    window.alert("No se adminten solicitudes de menores de edad");
    document.getElementById("filaE").style.visibility = "hidden";
  } else {
    document.getElementById("filaE").style.visibility = "";
  }
}

//Ejercicio 4

imagen = new Array();
imagen[1] = "./imagenes/captcha/frase1.png";
imagen[2] = "./imagenes/captcha/frase2.png";
imagen[3] = "./imagenes/captcha/frase3.png";
imagen[4] = "./imagenes/captcha/frase4.png";
imagen[5] = "./imagenes/captcha/frase5.png";
imagen[6] = "./imagenes/captcha/frase6.png";
imagen[7] = "./imagenes/captcha/frase7.png";

valor = new Array();
valor[1] = "9eb327bb9037887da08db5c64a0dc25c7e290583f90bf60816532b3754a54996";
valor[2] = "331042b02b9d826ca6a59c1864554b373b178d04448e2b3c73e88387674a1d82";
valor[3] = "9e2c2ff57af00848a76139fcf8793bc7c28a4fda3ec07faa0a2e35a72013259b";
valor[4] = "3b086aa3b0f9d1c93c3700d6fd9e08ec436171a07bef6d5c7f3b34cd69b5c4c0";
valor[5] = "9b754e43d33c94ac86a169ab50bda96611c59bbf840b02ed0e910a00664c1032";
valor[6] = "6954b01f71617603a77da9e9b76f85f59406d60de05fe76d58828b1ca99d4982";
valor[7] = "993be4343ebd8ef0aaffb453ff485e76a252d1d58f04cd03d805bf54dbb22557";

var i = 5;
var solucion;
var rep;

window.onkeydown = tecla;

function tecla() {
  t = event.keyCode;
  if (t == 13) {
    comprobar();
  }
}

function cambiar() {
  numero = Math.floor(Math.random() * 7 + 1);
  if (numero == rep) {
    cambiar();
  } else {
    rep = numero;
    solucion = valor[numero];
    document.getElementById("img").src = imagen[numero];
  }
}

function comprobar() {
  if (document.getElementById("sol").value == "") {
    window.alert("El campo no puede estar vacio");
  } else {
    if (i == 1) {
      window.alert("Este es tu ultimo intento");
      cambiar();
      document.getElementById("sol").value = "";
      i = i - 1;
      document.getElementById("sol").focus();
    } else {
      if (i == 0) {
        window.alert("Has fallado todos los intentos");
        document.getElementById("captcha").style.display = "none";
      } else {
        if (sha256(btoa(document.getElementById("sol").value)) == solucion) {
          document.getElementById("captcha").style.display = "none";
          document.getElementById("proyectos").style.display = "";
        } else {
          window.alert("Te quedan " + i + " intentos");
          cambiar();
          document.getElementById("sol").value = "";
          i = i - 1;
          document.getElementById("sol").focus();
        }
      }
    }
  }
}
