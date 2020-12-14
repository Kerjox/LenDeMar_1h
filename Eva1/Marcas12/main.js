function mostrar() {
    
    alert("Todo el docuemnto");
    
    for (let i = 0; i < document.all.length; i++) {
        
        console.log(document.all[i].tagName);
        
    }

    alert("Imagenes del documanto");

    for (let i = 0; i < document.images.length; i++) {
        
        console.log(document.images[i].src);
        
    }

    alert("Otro modo de acceso al vector");

    let objeto = document.images.imagen02;
    console.log(objeto);

}