var idade = 1;

var experienciaAnos = 5;

var nivelEducacao = "superior";

var possuiCertificado = true;

var idadeMinima = 18;

var experienciaMinimaAnos = 3;

var nivelEducacaoMinimo = "superior";

var certificadoObrigatorio = true;

var elegibilidade = idade >= idadeMinima && experienciaAnos >= experienciaMinimaAnos && nivelEducacao == nivelEducacaoMinimo && possuiCertificado == certificadoObrigatorio;



if(elegibilidade == true)
    {
    console.log(
        "Parabéns, você está elegível para essa vaga."
    );
    }
else{
    console.log(
    "Infelizmente você não está elegível para essa vaga."
    )
}