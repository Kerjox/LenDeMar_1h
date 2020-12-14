let date = new Date();

let img = (date.getSeconds() % 4) + ".jpg";
console.log(img);
let vosa = document.write("<body background=./src/img/" + img + ">")