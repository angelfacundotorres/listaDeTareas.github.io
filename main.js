let inputBienvenida = document.getElementById('inputBienvenida');
let botonBienvenida = document.getElementById('botonBienvenida');
let nombre = '';

botonBienvenida.addEventListener('click', function(){
    nombre = inputBienvenida.value;
    console.log('Nombre ingresado:' +nombre);
})

