imagen = new Array ();
    imagen[0]="./imagenes/0.jpg";
    imagen[1]="./imagenes/1.jpg";
    imagen[2]="./imagenes/2.jpg";
    imagen[3]="./imagenes/3.jpg";
    imagen[4]="./imagenes/4.jpg";
    imagen[5]="./imagenes/5.jpg";
    imagen[6]="./imagenes/6.jpg";
    imagen[7]="./imagenes/7.jpg";
    imagen[8]="./imagenes/8.jpg";
    imagen[9]="./imagenes/9.jpg";
    
    valor = new Array ();
    valor[0]="nsohsaerp";
    valor[1]="BK368H";
    valor[2]="542642";
    valor[3]="wrans";
    valor[4]="cralsist";
    valor[5]="3bAway";
    valor[6]="RYBIWH";
    valor[7]="808720";
    valor[8]="HOSTALIA";
    valor[9]="RXZMT";

    var i = 1;
    var numero;
    var solucion;

    function cambiar() {
    numero=Math.floor(Math.random()*(10));
    solucion=valor[numero];
    document.getElementById("img").src=imagen[numero];
}

    function comprobar() {
        if (document.getElementById("sol").value=="") {
            window.alert("El campo no puede estar vacio");
        } else {
         if (i==3) {
            window.alert("Has fallado varios intentos");
            window.location="fail.html";
        } else {
            if (solucion==document.getElementById("sol").value) {
                window.alert("Correcto");
                window.location="correcto.html";
            }
            else {
                window.alert("Intentalo de nuevo");
                cambiar();
                document.getElementById("sol").value="";
                i=i+1;
            }
        }
        }   
        }
        
        