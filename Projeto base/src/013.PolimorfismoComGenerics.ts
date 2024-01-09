// Usamos generics para definir um tipo generico de função
// filtrar qualquer tipo de array e retornar um array do mesmo tipo.
type filtroSignature = <T>(array: T[], func: (item: T) => boolean) => T[];

// Criamos uma função que recebe um array e uma arrow function e retorna um array filtrado
let filtro: filtroSignature = <T>(array: T[], func:(item: T) => boolean): T[] => {
    let filtrado: T[] = [];
    array.forEach(item => {
        func(item) ? filtrado.push(item) : null;
    });
    return filtrado;
}

//Map generico---------------------------------------------
// Utilizamos dois tipos genericos para definir o tipo de entrada e saída da função,
// já que um map pode receber um array de qualquer tipo e retornar um array de qualquer tipo.
type MapSignature = <T, R>(array: T[], func: (item: T) => R) => R[];
let map: MapSignature = <T, R>(array: T[], func: (item: T) => R): R[] => {
    let result: R[] = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i]);
    }
    return result;
}
