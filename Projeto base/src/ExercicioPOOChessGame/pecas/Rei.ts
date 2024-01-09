class Rei extends Peca {
    podeMoverSe(posicao: Posicao): boolean {
        let distancia = this.posicao.distanciaAte(posicao)
        return distancia.posicaoY < 2 && distancia.posicaoX < 2;
    }
}