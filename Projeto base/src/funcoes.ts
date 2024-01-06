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

// Call, Apply e Bind-------------------------------------------------
