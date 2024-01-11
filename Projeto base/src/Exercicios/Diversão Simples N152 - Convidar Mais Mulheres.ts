/*Rei Arthur e seus cavaleiros estão dando uma festa de Ano Novo. No ano passado, Lancelot estava
com ciúmes de Arthur, porque Arthur tinha um encontro e Lancelot não, e eles começaram um duelo.
Para evitar que isso aconteça novamente, Arthur quer ter certeza de que há pelo menos tantas
mulheres quanto homens na festa deste ano. Ele lhe deu uma lista de inteiros de todos os
participantes da festa. Arthur precisa que você retorne verdadeiro se ele precisar convidar mais
mulheres ou falso se ele estiver pronto.

ENTRADA: Um array representando os gêneros dos participantes, onde -1 representa mulheres e 1
representa homens. 2 <= L.length <= 50
Saída: Um valor booleano*/

function inviteMoreWomen (L: number[]): boolean {
    return L.reduce((a, b) => a + b) > 0
}

console.log(inviteMoreWomen([1, -1, 1])) // true
console.log(inviteMoreWomen([1, 1, 1])) // true
console.log(inviteMoreWomen([-1, -1, -1])) // false
