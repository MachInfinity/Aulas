var url1 = 'http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme'

const parametros = url1.split('?')[1]
console.log(parametros);
const parametros1 = parametros.split('&')
console.log(parametros1);

for(
    let i = 0 ; i < parametros1.length ; i++
)
{
    if(
        parametros1[i].startsWith('atores')
    )
    {
        parametros1[i] = 'atores=' + parametros1[i].substring(7).toUpperCase();
    }
}

console.log(parametros1)