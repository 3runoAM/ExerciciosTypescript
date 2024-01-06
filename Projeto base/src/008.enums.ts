// Enums são valores constantes e imutáveis, que podem ser usados para definir um conjunto de valores nomeados.
const enum statusPedido {
    EM_PRODUCAO,
    ENVIADO,
    ENTREGUE,
    CANCELADO
}

// O valor padrão do primeiro elemento é 0, e os demais elementos são incrementados em 1.
/*É uma boa prática definir enums como constantes, assim evitamos acessar valores que não existem
por meio de um índice inválido. Se o enum acima não fosse constante poderíamos acessar statusPedido[4]
sem uma exceção ser lançada.*/