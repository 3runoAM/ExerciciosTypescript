//Assinatura de chamadas------------------------------------------------
// Podemos definir a assinatura de chamadas de uma função, definindo o tipo de retorno e os tipos dos parâmetros.
type somaCallSignature = (num1: number, num2?: number) => number;

// Não precisamos definir o tipo de retorno e dos parâmetros, pois o ts infere a partir da assinatura de chamada.
let soma: somaCallSignature = (num1, num2= 0) => {
    return num1 + num2;
}

console.log(soma(2));
