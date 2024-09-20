var nomes1 = ['Jashin','Marin','Charlotte','Takina','Violet'];
nomes1.unshift('Anya');
nomes1.splice(2,1);
nomes1.indexOf('Charlotte');
if(
    nomes1.includes('Violet')
) {
    nomes1.splice(
        nomes1.indexOf('Violet'),
        1,
        'Violet Evergarden'
    );
}
var numeros = [1,2,3,4,5,6,7,8,9,10];
var resultado = numeros.filter(
    x => x % 2 == 0
);
console.log(resultado)
var numeros2 = numeros.filter(
    function(valor) {
        return valor > 5
    }
);
console.log(numeros2)
function buscarValor(valor) {
    return valor > 8
}
var numeros3 = numeros.filter(buscarValor);
console.log(numeros3)
var numeros4 = numeros.filter(
    (valor) => {
        return valor > 2
    }
)
console.log(numeros4)
var numeros5 = numeros.filter(x => x > 5)
console.log(numeros5)