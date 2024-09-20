class contaCliente{
    constructor(
        numeroConta,saldo,debito,credito
    )
    {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }
    calcularSaldoAtual()
    {
        return this.saldo - this.debito + this.credito
    }
    verificarSaldo()
    {
        const saldoAtual = this.calcularSaldoAtual()
        if(
            saldoAtual >=0
        )
        {
            alert(
                'Saldo positivo R$ ' + saldoAtual
            )
        }
        else{
            alert(
                'Saldo negativo R$ ' + saldoAtual
            )
        }
    }
}

let numeroConta = prompt(
    'Digite o número da conta'
)
let saldo = parseFloat(
    prompt(
        'Digite o saldo'
    )
)
let debito = parseFloat(
    prompt(
        'Digite o debito'
    )
)
let credito = parseFloat(
    prompt(
        'Digite o credito'
    )
)

let conta = new contaCliente(
    numeroConta,saldo,debito,credito
)

conta.verificarSaldo();