var s = 'JavaScript e Python';

var posicao1 = s.indexOf('Python');
console.log(posicao1);

var novaString = s.substring(13,19);
console.log(novaString)

var frase1 = "Olá mundo"
if(
    frase1.startsWith('Olá')
);
{
    var subfrase = frase1.substring(4);
    var novaFrase1 = subfrase.replace('mundo' , 'pessoal');
    var novaFraseUpper = novaFrase1.toUpperCase();
}
console.log(novaFraseUpper)