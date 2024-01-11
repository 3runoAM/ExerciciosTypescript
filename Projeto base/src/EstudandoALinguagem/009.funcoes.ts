// Podemos criar funções nomeadas e funções anônimas

// Função nomeada-----------------------------------------------------
function dizOi(nome: string) {
    return `Olá ${nome}!!`;
}

// Função anônima-----------------------------------------------------
let dizerOi = (nome: string) => {
    return `Olá ${nome}!!`;
}

// Função anônima com retorno implícito
let dizerOi2 = (nome: string) => `Olá ${nome}!!`;

// Podemos criar uma função usando o construtor Function, mas não é recomendado.
// Nesse caso retorno e parametros acabam não tendo tipagem e variavel acaba sendo do tipo Function
let dizOi3 = new Function("nome", "idade", "return `${nome} tem ${idade} anos.`");

// Parâmetros opcionais-----------------------------------------------
// Podemos definir parâmetros opcionais, com ? após o nome do parâmetro
function dizOi4(nome: string, idade?: number) {
    idade ? console.log(`${nome} tem ${idade} anos.`) : console.log(`${nome} não informou a idade.`);
}
dizOi4("João", 20);
dizOi4("Maria");

// Parâmetros default-------------------------------------------------
// Podemos definir valores default para parâmetros, caso não sejam informados
// É uma boa prática manter o parâmetro com valor default por último
function dizOi5(idade: number, nome= "Usuário") {
    console.log(`${nome} tem ${idade} anos.`);
}

dizOi5(20)

// Parâmetros default com objeto com atributos opcionais---------------
type infos = {
    nome?: string
    idade?: number
}
function dizOi6(informacoes: infos = {}) {
    informacoes.idade ?
        console.log(`${informacoes.nome} tem ${informacoes.idade} anos.`) :
        console.log(`${informacoes.nome} não informou a idade.`);
}

dizOi6({nome: "João", idade: 20});
dizOi6({nome: "Maria"});


// Parametros REST----------------------------------------------------
// Podemos definir um parâmetro REST, que é um array de valores
// O parâmetro REST deve ser o último parâmetro da função
function dizOi7(...nomes: string[]) {
    nomes.forEach(nome => console.log("Say hello to ", nome));
}

dizOi7("João", "Maria", "Pedro");
dizOi7("Bruno")


// This implícito/explicito-----------------------------------------------------
// Toda função em js/ts possui um this implícito que se refere ao contexto no qual a função é invocada.
// this é utilizado para se referir ao objeto atual em um método ou construtor.
// Se o tipo do this não for definido, ele será do tipo any
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentarSe(this: Pessoa) {  // this dentro do método apresentarSe se refere à instância atual da classe Pessoa.
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

// Essa função espera receber um objeto do tipo Pessoa como parâmetro e acessa o atributo nome desse objeto.
function cumprimentar(pessoa: Pessoa) {
    console.log(`Olá, ${pessoa.nome}!`);
}


// Call, apply e bind-------------------------------------------------
// Podemos utilizar call, apply e bind para definir o valor do this de uma função.
// call e apply invocam a função imediatamente, enquanto bind retorna uma nova função com o this definido.
// Exemplo de call----------------------------------------------------
function cumprimentarThis(this: any) {
    console.log(`Olá, ${this.nome}!`);
}

const user = {
    nome: "João",
    idade: 20
}
let pessoa1 = new Pessoa("Maria", 20);

// pessoa1 é passado como parâmetro para a função call, tornando-o o this da função cumprimentarThis.
cumprimentarThis.call(pessoa1);

// user é passado como parâmetro para a função call, tornando-o o this da função cumprimentarThis.
cumprimentarThis.call(user);


//Exemplo de apply----------------------------------------------------
function sumNumbers(this: any, firstNumber: number, secondNumber: number) {
    const sum = this + firstNumber + secondNumber;
    console.log(sum)
}

sumNumbers.apply(5, [2, 7])


// Exemplo de bind----------------------------------------------------
const user2 = {
    nome: "João",
    idade: 20
}

// A função cumprimentarThis2 recebe o this como parâmetro e retorna uma nova função com o this definido.
const cumprimentarThis2 = cumprimentarThis.bind(user2);

cumprimentarThis2();
cumprimentarThis2();
cumprimentarThis2();