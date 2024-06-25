let numeroSecreto, intentos;
let evitarNumeroRepetido=0;
let numeroMaximo = 10;

inicio();

function verificarIntento(){
    let number = parseInt(document.getElementById('numberInput').value);
    if(number === numeroSecreto){
        
        asingarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1)?'intento, wow!' :  'intentos.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        let ayudaTexto;
        (number>numeroSecreto) ? ayudaTexto='menor' : ayudaTexto='mayor';
        asingarTextoElemento('p', `El número es ${ayudaTexto}`);

        intentos++;
        limpiarCaja();
    }
    return;
}

function inicio() {
    asingarTextoElemento('h1', 'Juego del número secreto.');
    asingarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    limpiarCaja();
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


function asingarTextoElemento(elemento, texto){
    let text = document.querySelector(elemento);
    text.innerHTML= texto;
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(evitarNumeroRepetido != 0){
        if(evitarNumeroRepetido == numeroGenerado){
            return generarNumeroSecreto();
        }else{
            evitarNumeroRepetido = numeroGenerado;
            return numeroGenerado;
        }
    }else{
        evitarNumeroRepetido = numeroGenerado;
        return numeroGenerado;
    }
}

function limpiarCaja(){
    document.querySelector('#numberInput'). value = '';
}


