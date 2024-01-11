// Array com tipo inferido
let aStringArray = ["a", "b", "c"];
let aNumberArray = [1, 2, 3];

// Array com tipo explicito
let stringArrayTyped: string[] = aStringArray;
let numberArrayTyped: number[] = aNumberArray;

// Array de múltiplos tipos inferidos
let arrayMultiType = ["a", 1, true];

// Array de múltiplos tipos explícitos usando união
let arrayMultiTypeExplicit: (string | number | boolean)[] = arrayMultiType;

// Declaração de array com generics
let nomes: Array<string> = ["João", "Maria", "José"];
let idades: Array<number> = [18, 21, 16];
let nomesIdades: Array<string | number> = ["João", "Maria", "José", 18, 21, 16];
nomesIdades.map((value) => {
 typeof value === "string" ? console.log(`O nome é ${value}`) : console.log(`A idade é ${value}`)
})

// Array de qualquer tipo, irá aceitar qualquer tipo. Uma boa prática é manter os arrays com um tipo específico
let anyArray = []

anyArray.push(1)
anyArray.push(3)
anyArray.push(4)
