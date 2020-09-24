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
    valor[0]="ad0a6ec4f811af63108d387b6ff80be09702248f6035489d6b63ee7ddb71a028";
    valor[1]="9ab158c64ffa7ca858b7e82a13b23c2cf73c90daec77dc03e1449d57545e7222";
    valor[2]="9794695dc565880b16115de987906bf71b84cbc418e692a3f348e9f7ba302d9b";
    valor[3]="130e1cfea52a7c5ada0be157da4b667975777889a9149e6d5f8a772d7a19fcd1";
    valor[4]="972de04b43149f61b03b9b358647818faa517b2df7dd0a3959ebc9da1af131b3";
    valor[5]="4eeba3053dc27790659f9dd7362e1e29b2139367bd47a4b5dc898c3cc5083392";
    valor[6]="e7fa860f098b207b3191e3f3a6784220b1a08f510bbb66b8cc3075834080117e";
    valor[7]="e4996422fc87bdfecb331736c627c0c2fa1656ae5a26632ea540451c79ef6dea";
    valor[8]="930e303057041e79020d5fd99c927c2c7947cf0fbe1872b7342f50767cc79a5b";
    valor[9]="2a40079a3839f7d559a8b6d6a7971eb9e32c31442199f4ee1b41a5ebfe6b63c0";

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
            if (solucion==sha256.hmac('patata',document.getElementById("sol").value)) {
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
        
        