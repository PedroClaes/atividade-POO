class VideoGame {
    nome: string;
    genero: string;
    numeroJogadores: number;
    plataforma: [string];
    preco: number;

    constructor(nome: string, genero: string, numeroJogadores: number, plataforma: [string], preco: number) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = plataforma;
        this.preco = preco;
    }

    exibirDetalhe(): void {
        console.log(`Detalhes do jogo:
            Nome: ${this.nome}
            Gênero: ${this.genero}
            Número de jogadores: ${this.numeroJogadores}
            Plataforma: ${this.plataforma}
            Preço: R$ ${this.preco.toFixed(2)}`);
    }

    aplicarDesconto(percentual: number): number {
        const desconto = (percentual / 100) * this.preco;
        const precoComDesconto = this.preco - desconto;
        return precoComDesconto;
    }

    addPlataforma(novaPlataforma: string): [string] {
        this.plataforma.push(novaPlataforma);
        return this.plataforma
    }

    estimarTempoJogo(): string {
        switch (this.genero) {
          case 'Ação':
            return 'Cerca de 12 horas';
          case 'Aventura':
            return 'Cerca de 20 horas';
          case 'Esportes':
            return 'Indeterminado';
          case 'Estratégia':
            return 'Cerca de 40 horas';
          default:
            return 'Tempo estimado desconhecido';
        }
    }
}

const gta = new VideoGame("gta", "Ação", 1, ["PS"], 500);
gta.exibirDetalhe();

const descontoPercentual = 10;
const novoPreco = gta.aplicarDesconto(descontoPercentual);

console.log(`Preço com ${descontoPercentual}% de desconto: R$ ${novoPreco.toFixed(2)}`);

gta.addPlataforma(" Xbox")
console.log(`O jogo esta disponivel nessas plataformas: ${gta.plataforma}`)

console.log(`Tempo estimado para terminar o jogo: ${gta.estimarTempoJogo()}`);