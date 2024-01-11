// União--------------------------------------------------------------------------------------------------------------
// Temos um tipo gato e um tipo cachorro;
type gato = {
    nome: string,
    ronrona: boolean,
    amassaPaozinho: boolean
};
type cachorro = {
    nome: string,
    late: boolean,
    senta: boolean
};

// Usando a união podemos criar um novo tipo que seja gato ou cachorro ou ambos;
type gatoOuCachorroOuAmbos = gato | cachorro;
// ESTE REPRESENTA UM GATO
let gatoAmarelo: gatoOuCachorroOuAmbos = {
    nome: 'Garfield',
    ronrona: true,
    amassaPaozinho: true
};
// ESTE REPRESENTA UM CACHORRO
let cachorroAmarelo: gatoOuCachorroOuAmbos = {
    nome: 'Scooby Doo',
    late: true,
    senta: true
};
// ESTE REPRESENTA AMBOS
let gatoCachorro: gatoOuCachorroOuAmbos = {
    nome: 'CatDog',
    ronrona: true,
    amassaPaozinho: true,
    late: true,
    senta: true
};

// Tipos de união são uteis em que se podemos esperar por mais de um tipo, nos argumentos de uma função, por exemplo:
type stringOuNumero = string | number;
function concatenar(input1: stringOuNumero, input2: stringOuNumero) {
    return input2.toString() + input1.toString();
}
// Interseção --------------------------------------------------------------------------------------------------------
// É a junção de todas as caracteristicas dos tipos que estão sendo interseccionados;

// Reepresenta um carro
type carro = {
    acelerar: boolean,
    re: boolean,
};

// Representa um foguete
type foguete = {
    decolar: boolean,
    pousar: boolean
};

// Representa um carro foguete, nunca apenas um ou apenas o outro, sempre os dois.
type carroFoguete = carro & foguete;

// Esse objeto é invalido, pois não possui a caracteristica de decolar
// let foguecarrro: carroFoguete = {
//     acelerar: true,
//     re: true,
//     pousar: false
// };

let carroFoguete: carroFoguete = {
    acelerar: true,
    re: true,
    decolar: true,
    pousar: true
};