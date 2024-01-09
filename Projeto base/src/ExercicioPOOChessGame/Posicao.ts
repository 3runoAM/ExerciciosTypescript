// Representa uma posição no tabuleiro
class Posicao {
    constructor(private posicaoX: PosicaoX, private posicaoY: PosicaoY) {
    }

    distanciaAte(posicao: Posicao) {
        return {
            posicaoY: Math.abs(posicao.posicaoY - this.posicaoY),
            posicaoX: Math.abs(posicao.posicaoX.charCodeAt(0) - this.posicaoX.charCodeAt(0))
        }
    }
}