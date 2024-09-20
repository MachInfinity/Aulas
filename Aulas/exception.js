function divisao(a,b)
{
    if(
        b === 0
    )
    {
        throw new Error(
            'Divisão por zero não é permitida'
        )
    }
    return a/b
}
try{
    const resultado = divisao(10,1)
    console.log('Resultado: ' + resultado)
}
catch(error)
{
    console.log('Ocorreu uma exceção: ' + error.message)
}
//2

const numeros = [
    1,2,3,4,5
];
try{
    const doubleNumbers = numeros.map(
        (num) =>
        {
            if(
                typeof num !== 'number'
            )
            {
                throw new Error(
                    'O array só pode ter números'
                )
            }
            return num*2;
        }
    )
    console.log(doubleNumbers)
}

catch(
    error
)
{
     console.log('Ocorreu uma exceção:' + error.message)
}

//3

function processoNome(
    nome,callback
)
{
    if(
        typeof nome !== 'string'
    )
    {
        callback(
            new Error(
                'O nome deve ser uma string'
            )
        )
        return
    }
    if(
        nome.length === 0
    )
    {
        callback(
            new Error(
                'O nome não pode estar vazio'
            )
        )
        return
    }
    callback(
        null, 'Nome processado com sucesso'
    )
}

processoNome(
    'Marcelo,',(error,result) => 
    {
        if(
            error
        )
        {
            console.log('Ocorreu um problema: ' , error.message)
        }
        else{
            console.log(result)
        }
    }
)