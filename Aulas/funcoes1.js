 function multiplicar(x,y)
    {
        return x * y
    }

var a = multiplicar(4,2)
var b = multiplicar(6,7)

console.log(a)
console.log(b)

function soma(a,b=2,c=6)
    {
        var total = a+b+c
        return total
    }

var f = soma(8)
console.log(f)

var infoCal = function(a,b,c)
    {
        return a+b+c
    }

console.log(infoCal(2,5,7))

const soma1 = (num1,num2) =>
{
    return num1 + num2
}
console.log(soma1(3,6))

const numeros = [
    1,2,3,4,5
]
const valores = numeros.map(
    (numX)=> numX * numX
)
console.log(valores)

var listaProdutos = ['geladeira','fogão','air fryer'];
var listaUpper = listaProdutos.map(
    primeiraUpper
);
function primeiraUpper(
    elemento
)
{
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}
console.log(listaUpper)
