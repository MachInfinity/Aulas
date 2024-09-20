var bussola = ['norte', 'sul', 'leste', 'oeste', 'noroeste', 'nordeste', 'sudoeste', 'sudeste'];

for(
    var pos = 0 ; pos < bussola.length ; pos++
)
{
    console.log(
        'Posição: ' + pos + ' Valor: ' + bussola[pos]
    );
}



var numeros = [1,2,3,4,5,6,7,8,9,10]
var soma = 0
for(
    var pos = 0 ; pos < numeros.length ; pos++
    )
{
    soma += numeros[pos];
}

var media = soma / numeros.length

console.log(media)