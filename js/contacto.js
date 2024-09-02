
document.addEventListener("DOMContentLoaded", ()=> {
    let textoCaptcha = document.querySelector('#txt-captcha');
    let numero = Math.floor(Math.random() * 8999) + 1000;
    textoCaptcha.innerHTML = "Ingrese clave numerica:" + numero;
    let form = document.querySelector('#formularioContacto');
    let input = document.querySelector('#captcha');
    form.addEventListener('submit', agregar);
    function agregar(e) {
        e.preventDefault();
        if (input.value == numero) {
            textoCaptcha.innerHTML = "La clave fue ingresada correctamente";
        } else {
            textoCaptcha.innerHTML = "Intente nuevamente, clave numerica:" + numero;
        }
    }
    
})
