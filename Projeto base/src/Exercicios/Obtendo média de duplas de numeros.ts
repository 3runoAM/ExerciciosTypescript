/* Obtenha as médias desses números
Escreva um método que recebe um array de números inteiros e retorna
um array das médias de cada número inteiro mais o próximo número
se houver um. Exemplo:
    Entrada: [ 1, 3, 5, 1, -10]
    Saída:   [ 2, 4, 3, -4.5]
Se o array tiver 0 ou 1 valor, ou for nulo, seu método deve retornar um array vazio. */

function averages(numbers:number[] | null ):number[]  {
    if(numbers === null || numbers.length <= 1) return []
    return numbers.slice(0, -1) // Cria um novo array que contém todos os elementos do array de entrada, exceto o último
        .map((value, index) => (value + numbers[index + 1]) / 2); /*  Para cada elemento no array
    // (representado por value), ele calcula a média desse elemento e do próximo elemento no array de entrada*/
}

console.log(averages([1, 3, 5, 1, -10])) // [ 2, 4, 3, -4.5]
console.log(averages([1, 3, 5, 1, -10, 0])) // [2,4,3,-4.5,-5]
console.log(averages([1])) // []
console.log(averages([])) // []
console.log(averages(null)) // []
console.log(averages([0, 2, 4, 6, 8, 10])) // [1,3,5,7,9]
