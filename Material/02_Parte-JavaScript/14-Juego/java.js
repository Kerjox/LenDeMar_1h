var izda;
var sup;
var cantidad = 0;

function mover() {
  
  izda = Math.floor(Math.random() * 800);
  sup = Math.floor(Math.random() * 500);
  document.getElementById("banana1").style.top = sup;
  document.getElementById("banana1").style.left = izda;

  izda = Math.floor(Math.random() * 800);
  sup = Math.floor(Math.random() * 500);
  document.getElementById("banana2").style.top = sup;
  document.getElementById("banana2").style.left = izda;

  temp1 = setTimeout("mover()", 1000);
}

function parar(n) {
  n.style.display = "none";
  cantidad = cantidad + 1;

  if (cantidad == 2) {
    clearTimeout(temp1);
  }
}
