/*Converter número para array reverso de dígitos
Dado um número aleatório não negativo, você deve retornar os dígitos desse número dentro de um array em ordem inversa.

Exemplo(Entrada => Saída):
35231 => [1,3,2,5,3]
0 => [0]*/


// Minha solução
export function digitize(n: number): number[] {
    return n.toString() // Converte o número para string
        .split("") // Converte a string para array
        .reverse() // Inverte o array
        .map(valor => parseInt(valor)); // Converte cada elemento do array para number
}

console.log(digitize(35231)); // [1,3,2,5,3]
console.log(digitize(0)); // [0]
console.log(digitize(123456789)); // [9,8,7,6,5,4,3,2,1]

// Solução de outro usuário do CodeWars
const digitize2 = (n: number): number[] => {
    return [...n.toString()] // Converte o número para string e depois para array usando [...n]
        .map(Number) // Converte cada elemento do array para number
        .reverse(); // Inverte o array
};

console.log(digitize2(35231)); // [1,3,2,5,3]
console.log(digitize2(0)); // [0]
console.log(digitize2(123456789)); // [9,8,7,6,5,4,3,2,1]
