class funcionario{
    constructor(
        nome,sobrenome,idade,cargo
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar() {
        console.log(
            'Bom dia, me chamo '+
            this.nome+
            ' '+
            this.sobrenome+
            ' tenho '+
            this.idade+
            ' anos, sou '+
            this.cargo+
            '.'
        ) 
    }
    trabalhar() {
        console.log(
            'Eu sou o '+
            this.sobrenome+
            ' começo a trabalhar ás 04:00h.'
        )
    }
}
funcionario1 = new funcionario(
    'Takumi','Fujiwara','25','entregador de Tofu'    
)
class gerente extends funcionario{
    constructor(
        nome,sobrenome,idade,cargo,departamento
    ) {
        super(
            nome,sobrenome,idade,cargo
        );
        this.departamento = departamento;
    }
    gerenciar() {
        console.log('Bom dia, me chamo '+
            this.nome+
             ' '+this.sobrenome+
            ' tenho '+
            this.idade+
            ' anos, sou '+
            this.cargo+
            ' de '+
            this.departamento
        ) 
    }
}
gerente1 = new gerente(
    'Goro','Majima','25','gerente','festas'
)
class desenvolvedor extends funcionario{
    constructor(
        nome,sobrenome,idade,cargo,linguagem
    ) {
        super(
            nome,sobrenome,idade,cargo,linguagem
        )
        this.linguagem = linguagem;
    }
    programar() {
        console.log(
            'Olá, me chamo '+
            this.nome+
            ' '+
            this.sobrenome+
            ' tenho '+
            this.idade+
            ' anos, sou '+
            this.cargo+
            ' e eu programo em '+
            this.linguagem+
            '.' 
        )
    }
}
desenvolvedor1 = new desenvolvedor(
    'Luis','Machado','25','desenvolvedor','JavaScript'
)

funcionario1.seApresentar();
funcionario1.trabalhar();
gerente1.gerenciar();
desenvolvedor1.programar();