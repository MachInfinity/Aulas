class Pessoa{
    constructor(nome,sobrenome)
    {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar()
    {
        console.log('Olá, ' + this.nome);
    }
    get nomeCompleto()
    {
        console.log('Olá, ' + this.nome + ' ' + this.sobrenome);
    }
}

Pessoa1= new Pessoa('Fábio','Silva');
Pessoa1.falar();
Pessoa1.nomeCompleto