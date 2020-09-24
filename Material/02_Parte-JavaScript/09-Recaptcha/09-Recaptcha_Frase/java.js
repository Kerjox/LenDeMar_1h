//<font color='red'></font>
frase = new Array ();
    frase[0]="Esto no es como el <font color='red'>agua</font> que cae del cielo sin que sepamos por que";
    frase[1]="Todo es <font color='red'>falso</font> salvo alguna cosa";
    frase[2]="Cuanto peor mejor para todos y cuanto peor para <font color='red'>todos</font> mejor, mejor para mi el suyo beneficio politico";
    frase[3]="Una cosa es ser solidario y otra es ser <font color='red'>solidario</font> a cambio de nada";
    frase[4]="¿Ustedes <font color='red'>piensan</font> antes de hablar o hablan tras pensar?";
    frase[5]="Tenemos que fabricar maquinas que permitan seguir fabricando <font color='red'>maquinas</font>, porque lo que nunca va a hacer la maquina es fabricar maquinas a su vez";
    frase[6]="Lo que nosotros hemos hecho, cosa que no hizo usted, es <font color='red'>enganar</font> a la gente";
    frase[7]="It is very dificult <font color='red'>todo</font> esto";
    frase[8]="Dije que bajaria los <font color='red'>impuestos</font> y los estoy subiendo";
    frase[9]="No he dormido nada, no me <font color='red'>pregunten</font> demasiado";
    frase[10]="Es el <font color='red'>vecino</font> el que elige el alcalde y es el alcalde el que quiere que sean los vecinos el alcalde";
    
    palabra = new Array ();
    palabra[0]="d02fece8729eb79de36d00b797bce3898e6d337a67e64519cde2218ce3cbdb69";
    palabra[1]="32dabe9189885a02c4d0378b4b61e60459ae760428a8ff977e300c36ff64e32a";
    palabra[2]="8641c4d71214e7616b3c84aa6124fbe2e5c02765d561c88ee7ed804f978d125e";
    palabra[3]="292b54af9ec7f7d83e57ae118e06a3a6e6056bc87a9043fc53392946b25ba7b4";
    palabra[4]="2327e9eff150a51b46d227d8bdbfb4ba15260d30c2c33e38a3f74eb22e77f4fa";
    palabra[5]="7045341705783b95f844ef3109c3ec763e2572364f0ee099fdf3e40ab2bd7e55";
    palabra[6]="1bde5da9ba43cedca8df75101015704030da9977465a2fb844f211b7a8df419c";
    palabra[7]="8c6b3878664252dfc3c7bc3d3c31a41844f852e7a49ca74efce49159d8fd78ee";
    palabra[8]="f27187a744c9bdd5e3773e51d18547d984197e3cc903709b66bc307908a9289d";
    palabra[9]="fc898f89d242dda8c7b42e10b04714e0322598f88851d9d9451a60b6c8787260";
    palabra[10]="39cad7917f33a92bde8c32914faef504c18c37c3868285c325402380833ea8f1";

    var i = 2;
    var numero;
    var solucion;
    var rep;

    window.onkeydown=tecla

    function tecla() {
        t=event.keyCode
        if (t==13) {
            comprobar();
        }
    }

    function cambiar() {
    numero=Math.floor(Math.random()*(11));
    if (numero==rep) {
        cambiar();
    } else {
        rep=numero;
        solucion=palabra[numero];
        document.getElementById("frase").innerHTML=frase[numero]; 
    }
    
}
    
    function comprobar() {
        if (document.getElementById("sol").value=="") {
            window.alert("El campo no puede estar vacio");
        } else {
            if (i==0) {
                window.alert("Has fallado todos los intentos");
                window.location="fail.html";
            } else {
                if (sha256(btoa(document.getElementById("sol").value))==solucion) {
                    window.alert("Correcto");
                    window.location="correcto.html";
                }
                else {
                    window.alert("Te quedan "+i+" intentos");
                    cambiar();
                    document.getElementById("sol").value="";
                    i=i-1;
                    document.getElementById("sol").focus();
                }
            }
            }   
            }