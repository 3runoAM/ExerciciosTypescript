class Partida {
    private pecas = Partida.criarPecas();
    private static criarPecas(): Peca[] {
        return [
            new Rei(new Posicao('E', 1), 'Black'),
            new Rei(new Posicao('E', 8), 'White'),

            new Rainha(new Posicao('D', 1), 'Black'),
            new Rainha(new Posicao('D', 8), 'White'),

            new Bispo(new Posicao('C', 1), 'Black'),
            new Bispo(new Posicao('F', 1), 'Black'),
            new Bispo(new Posicao('C', 8), 'White'),
            new Bispo(new Posicao('F', 8), 'White'),

            new Cavalo(new Posicao('B', 1), 'Black'),
            new Cavalo(new Posicao('G', 1), 'Black'),
            new Cavalo(new Posicao('B', 8), 'White'),
            new Cavalo(new Posicao('G', 8), 'White'),

            new Torre(new Posicao('A', 1), 'Black'),
            new Torre(new Posicao('H', 1), 'Black'),
            new Torre(new Posicao('A', 8), 'White'),
            new Torre(new Posicao('H', 8), 'White'),

            new Peao(new Posicao('A', 2), 'Black'),
            new Peao(new Posicao('B', 2), 'Black'),
            new Peao(new Posicao('C', 2), 'Black'),
            new Peao(new Posicao('D', 2), 'Black'),
            new Peao(new Posicao('E', 2), 'Black'),
            new Peao(new Posicao('F', 2), 'Black'),
            new Peao(new Posicao('G', 2), 'Black'),
            new Peao(new Posicao('H', 2), 'Black'),

            new Peao(new Posicao('A', 7), 'White'),
            new Peao(new Posicao('B', 7), 'White'),
            new Peao(new Posicao('C', 7), 'White'),
            new Peao(new Posicao('D', 7), 'White'),
            new Peao(new Posicao('E', 7), 'White'),
            new Peao(new Posicao('F', 7), 'White'),
            new Peao(new Posicao('G', 7), 'White'),
            new Peao(new Posicao('H', 7), 'White'),
        ]
    }
}