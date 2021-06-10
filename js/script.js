let body = document.querySelector('body');
let boton = document.querySelector('#tema');

boton.addEventListener("click", function(){
    body.classList.toggle("dark");
})