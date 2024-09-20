var numeros = [5,30]
var logica = true
// a logica default é true até que o if rode a condição
for(
    var i = 0; //inicial do for
    i < numeros.length; //condição do for
    i++ //incremento
    )
{
    if(
        numeros[i] % 3 !== 0 || numeros[i] % 5 !== 0 //logica do if
    )
    {
        logica = false; //condição falsa do if
        break;
    }
}

console.log(logica)