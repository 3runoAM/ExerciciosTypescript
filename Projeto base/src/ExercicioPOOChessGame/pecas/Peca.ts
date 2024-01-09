// Representa uma peça
abstract class Peca {
    constructor(protected posicao: Posicao, private readonly cor: Cor){}
    moverSe(posicao: Posicao): void{
        this.posicao = posicao
    }
    abstract podeMoverSe(posicao: Posicao): boolean
}