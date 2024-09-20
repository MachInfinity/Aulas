var produto = "Café"
switch(produto)
    {
        case "Café":
            console.log("O café custa R$ 10,99.")
            break;
        case "Chá":
            console.log("O chá custa R$ 8,99.")
            break;
        case "Leite":
            console.log("O leite custa R$ 7,99.")
            break;
        
        default:
            console.log(`"Desculpe, nós estamos sem ${produto}, por favor escolha entre Café, Chá ou Leite"`)
 }