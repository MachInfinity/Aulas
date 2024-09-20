var nome = 'Luis Eduardo';
var x = nome.length;
console.log(x);

resultado = x > 10 ? 'Obrigado' : 'Por favor preencha seu nome completo';
console.log(resultado);

var res = nome.toLocaleUpperCase();
console.log(res);

var jogo = 'Barcelona vs Real, melhor time';

var posicao = jogo.indexOf('Real');
console.log(posicao);

var cortado = jogo.slice(0,9);
console.log(cortado);

var cortado2 = jogo.slice(13);
console.log(cortado2);

var val = jogo.includes('Real');
console.log(val);

var string1 = 'Hello';
var string2 = 'Turma';
var string3 = string1.concat(string2);
console.log(string3);

var frase = '       Olá você está aprendendo JavaScript';
console.log(frase.trim());

var num = '1,2,3,4,5,6,7,8,9';
var array1 = num.split(",");
console.log(array1)
