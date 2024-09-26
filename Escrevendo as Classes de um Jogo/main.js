class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
heroi1.atacar();

const heroi2 = new Heroi('Merlin', 150, 'mago');
heroi2.atacar();

const heroi3 = new Heroi('Ryu', 25, 'monge');
heroi3.atacar();

const heroi4 = new Heroi('Hanzo', 35, 'ninja');
heroi4.atacar()

const heroi5 = new Heroi('Zé', 35, 'cavaleiro');
heroi5.atacar();