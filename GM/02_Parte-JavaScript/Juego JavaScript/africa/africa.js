var pais;

pais = new Array();
pais[0] = "Marruecos";
pais[1] = "Argelia";
pais[2] = "Tunez";
pais[3] = "Libia";
pais[4] = "Egipto";
pais[5] = "Sudan";
pais[6] = "Chad";
pais[7] = "Niger";
pais[8] = "Mali";
pais[9] = "Mauritania";
pais[10] = "Nigeria";
pais[11] = "Camerun";
pais[12] = "Republica Centroafricana";
pais[13] = "Sudan del Sur";
pais[14] = "Etiopia";
pais[15] = "Somalia";
pais[16] = "Republica Democratica del Congo";
pais[17] = "Kenia";
pais[18] = "Tanzania";
pais[19] = "Angola";
pais[20] = "Zambia";
pais[21] = "Mozambique";
pais[22] = "Zimbabwe";
pais[23] = "Botswana";
pais[24] = "Namibia";
pais[25] = "Sudafrica";
pais[26] = "Madagascar";

var ronda2;

ronda2 = new Array();

var final;

final = new Array();

var fallos = 0;
var aciertos = 0;
var solucion;
var numero;
var ronda = 1;
var score = 0;

function cambiar() {
   if (pais["length"] == 0 && ronda2["length"] == 0) {
    fin();
    document.getElementById("pais").innerText = "Fin";
    document.getElementById("mapa").style.display = "none";
  } else {
    if (pais["length"] == 0) {
      ronda = 2;
      numero = Math.floor(Math.random() * ronda2["length"]);
      solucion = ronda2[numero];
      document.getElementById("pais").innerText = ronda2[numero];
    } else {
      numero = Math.floor(Math.random() * pais["length"]);
      solucion = pais[numero];
      document.getElementById("pais").innerText = pais[numero];
      
    }
  }
}

function comprobar(p) {
  if (p == solucion) {
    if (ronda == 1) {
      pais.splice(numero, 1);
      aciertos = aciertos + 1;
      score = score + 100;
      refrescar();
      cambiar();
    } else {
      ronda2.splice(numero, 1);
      aciertos = aciertos + 1;
      score = score + 50;
      refrescar();
      cambiar();
    }
  } else {
    if (ronda == 1) {
      fallos = fallos + 1;
      refrescar();
      fallo();
    } else {
      fallos = fallos + 1;
      refrescar();
      fallo();
    }
    
  }
}

function fallo() {
  if (ronda == 1) {
    ronda2.push(solucion);
    pais.splice(numero, 1);
    refrescar();
    cambiar();
  } else {
    final.push(solucion);
    ronda2.splice(numero, 1);
    refrescar();
    cambiar();
  }
  
}

function refrescar() {
  document.getElementById("ronda").innerHTML = ronda;
  document.getElementById("puntos").innerHTML = score;
  document.getElementById("aciertos").innerHTML = aciertos;
  document.getElementById("fallos").innerHTML = fallos;
}

function fin() {
  document.getElementById("npais").style.display = "";
  document.getElementById("refrescar").style.display = "";
  for (let i = 0; i < final.length; i++) {
    document.getElementById("final").innerHTML += "<p>"+final[i]+"</p>";
  }
}