class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
        super(nome, idade, 'Gerente');
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
        super(nome, idade, 'Desenvolvedor');
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.textContent = mensagem;
}

function processarFormulario() {
    try {
        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value);
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;
        if (!nome || isNaN(idade) || idade <= 0) {
            throw new Error('Nome ou idade inválidos.');
        }

        let funcionario;
        if (cargo === 'Gerente') {
            if (!departamento) {
                throw new Error('O campo departamento é obrigatório para o cargo de Gerente.');
            }
            funcionario = new Gerente(nome, idade, departamento);
        } else if (cargo === 'Desenvolvedor') {
            if (!linguagem) {
                throw new Error('O campo linguagem é obrigatório para o cargo de Desenvolvedor.');
            }
            funcionario = new Desenvolvedor(nome, idade, linguagem);
        }

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
            <p>${cargo === 'Gerente' ? funcionario.gerenciar() : funcionario.programar()}</p>
        `;

        exibirErro('');
    } catch (erro) {
        exibirErro(erro.message);
    }
}

document.getElementById('cargo').addEventListener('change', function () {
    const cargo = this.value;
    document.getElementById('gerente').style.display = cargo === 'Gerente' ? 'block' : 'none';
    document.getElementById('dev').style.display = cargo === 'Desenvolvedor' ? 'block' : 'none';
});

document.getElementById('gerente').style.display = 'none';
document.getElementById('dev').style.display = 'none';
