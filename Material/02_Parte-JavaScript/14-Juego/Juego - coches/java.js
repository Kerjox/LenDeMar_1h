vel = new Array();
vel[1] = 0;
vel[2] = 0;

var coche1 = 0;
var coche2 = 0;
var ganador = 0;

function preparar() {
  
}

function velocidad() {
  vel[1] = Math.floor(Math.random() * 20);
  document.getElementById("vel1").value = vel[1];
  vel[2] = Math.floor(Math.random() * 20);
  document.getElementById("vel2").value = vel[2];
  mover();
  meta();
}

function mover() {
  
  coche1 = coche1 + vel[1];
  document.getElementById("x1").value = coche1;
  document.getElementById("banana1").style.left = coche1;
  

  coche2 = coche2 + vel[2];
  document.getElementById("x2").value = coche2;
  document.getElementById("banana2").style.left = coche2;
  

  temp1 = setTimeout("mover()", 100);
}

function meta() {
  if (coche1 > 1120 || coche2 > 1120) {
    if (coche1 > 1120) {
      ganador = 1;
      window.alert("Ha ganado la banana" + ganador);
      parar();
    } else {
      ganador = 2;
      window.alert("Ha ganado la banana" + ganador);
      parar();
    }
  }
  temp2 = setTimeout("meta()", 100);
}

function parar() {
  clearTimeout(temp1);
  clearTimeout(temp2);
}