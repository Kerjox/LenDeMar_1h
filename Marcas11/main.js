function mover() {
    
    let marginNow = 10;
setInterval(() => {
        
        console.log(marginNow);
        marginNow += 10;

        imagen.style.marginLeft = marginNow + "px";

    
}, 1000);}