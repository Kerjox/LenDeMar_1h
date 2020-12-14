function crear() {
    ventana=window.open("","Ventana","top=50,left=200,height=300,width=400");
    ventana.document.write("<html><head><title>Pagina</title></head><body bgcolor="+document.getElementById("color").value+"><h1>Bienvenid@ "+document.getElementById("nombre").value +"</h1</body></html>");
    //document.getElementById("color").value 

}