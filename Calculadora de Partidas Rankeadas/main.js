function calcularVitorias(qtdVitorias) {
    let nivel;

    switch (true) {
        case (qtdVitorias < 10):
            nivel = "Ferro";
            break;
        case (qtdVitorias <= 20):
            nivel = "Bronze";
            break;
        case (qtdVitorias <= 50):
            nivel = "Prata";
            break;
        case (qtdVitorias <= 80):
            nivel = "Ouro";
            break;
        case (qtdVitorias <= 90):
            nivel = "Diamante";
            break;
        case (qtdVitorias <= 100):
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    return nivel;
}

let resultado = calcularVitorias(60);
console.log(`O nível do jogador é: ${resultado}`);