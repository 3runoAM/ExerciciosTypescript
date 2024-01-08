// Criamos um novo tipo que utiliza generics para definir o tipo de retorno da função de filtro que pode
// filtrar qualquer tipo de array e retornar um array do mesmo tipo.
type filtroSignature = <T>(array: T[], func: (item: T) => boolean) => T[]

// Criamos uma função que recebe um array e uma arrow function e retorna um array filtrado
let filtro: filtroSignature = <T>(array: T[], func:(item: T) => boolean): T[] => {
    let filtrado: T[] = [];
    array.forEach(item => {
        func(item) ? filtrado.push(item) : null;
    });
    return filtrado;
}

//Map generico---------------------------------------------
type MapSignature = <T, R>(array: T[], func: (item: T) => R) => R[];
let map: MapSignature = <T, R>(array: T[], func: (item: T) => R): R[] => {
    let result: R[] = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i]);
    }
    return result;
}
