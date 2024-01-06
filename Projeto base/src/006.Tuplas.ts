// Uma tupla que tem dois elementos, o primeiro é uma string e o segundo é um number
let pessoaInfo: [string, number] = ["João", 25];
let carroInfo: [string, string, number, boolean] = ["Gol", "Volkswagen", 2020, true]

// Tuplas com elementos opcionais
let numeros: [number, number, number?] = [1, 2, 3];
let numeroOpcional: [number, number, number?] = [1, 2];

// Tuplas com elementos rest: Elementos rest são sempre os últimos elementos da tupla.
// São representados por ...tipo[].
// Com zero elementos do tipo string
let tuplaRest: [number, ...string[]] = [1]

// Com mais elementos string
let outraTuplaRest:  [number, ...string[]] = [1, "a"]
let maisUmaTuplaRest:  [number, ...string[]] = [1, "a", "b"]