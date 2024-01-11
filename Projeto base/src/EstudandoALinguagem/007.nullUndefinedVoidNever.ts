// Funções retornam void quando não retornam nada, ou seja, não possuem return
function x(){
    console.log('teste');
}
function y(): void {
    console.log('teste');
}

// Undefined também é o valor retornado quando acessamos uma propriedade de um objeto que não existe, ou que não tem
// valor definido ainda.
let z = undefined;


// Null é a ausência de valor proposital
function exemploNull(num: number) {
    return num === 1 ? null : num;
}

// Never é o tipo de valor retornado quando uma função nunca retorna
// um valor, ou seja, quando a função lança uma exceção
function exemploNever(): never {
    throw new TypeError();
}