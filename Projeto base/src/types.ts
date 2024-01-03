// Utilizado quando não sabemos o tipo de uma variável
let unknown:unknown = 0;


// Utilizado quando sabemos que o tipo de uma variável pode ser qualquer coisa
let any:any = 0;


//tipo booleano, pode ser qualquer valor do conjunto de valores booleanos (true ou false)
let boolTrue:boolean = true;
let boolFalse:boolean = true;


// tipo literal true (não pode ser false)
const typeTrue:true = true;
// tipo literal false (não pode ser true)
const typeFalse:false = false;


// Tipo number, pode ser qualquer valor do conjunto de valores numéricos
let numberInt:number = 0;
let numberFloat:number = 0.1;


// Typescript utiliza _ para separar os milhares
let treeMillion = 3_000_000;


// bigint é um tipo numérico que pode armazenar números inteiros de qualquer tamanho
let bigIntN:bigint = 100n;


// Tipo string, pode ser qualquer valor do conjunto de valores string
let stringName:string = "João";


// Tipo symbol é um tipo primitivo cujo valor é único e imutável
let mySymbol:symbol = Symbol("mySymbol");
const otherSymbol: unique symbol = Symbol("otherSymbol");


//Tipo object é um tipo que representa o tipo não primitivo, ou seja, qualquer coisa que não é number, string,
// boolean, bigint, symbol, null ou undefined.
const objt:object = {
    name: "João",
    age: 20
};


// É possível definir o tipo de um objeto utilizando a sintaxe de objeto literal
const aObject = {
    name: "João",
    age: 20
};
console.log(aObject.name);


// Descrevendo os tipos de um objeto utilizando a sintaxe de objeto literal declarando o tipo de cada propriedade explicitamente
let otherObject: {name:string, age:number} = {
    name: "João",
    age: 20
};


let thisObject: {
    b: number // thisObject tem uma propriedade b do tipo number
    c?: string // thisObject pode ter uma propriedade c do tipo string, opcional (?)
    [key: number]: boolean // thisObject pode ter qualquer número de propriedades, onde a key é do tipo number
    // e o valor do tipo boolean
}


// Usando index signatures para descrever um objeto com propriedades dinâmicas, podendo ter qualquer número de propriedades
// desde que a propriedade/key seja do tipo string e o valor do tipo string
let assentosDeAviao: { [numeroAssento: string]: string } = {
    '34D': 'Boris Cherny',
    '34E': 'Bill Gates'
}

// Usamos readonly para indicar que uma propriedade não pode ser alterada depois de criada
let usuario: {name: string, readonly birthay: Date} = {
    name: "João",
    birthay: new Date("2000-01-01")
};


