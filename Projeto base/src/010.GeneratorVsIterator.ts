// Generators são funções responsáveis por gerar sequências de valores. Retorna um objeto que é iterador e pode ser iterado.
function* geraMultiplosDeN(n: number): IterableIterator<number> {
    let i = 0;
    while(true) {
        yield i * n; // yield, keyword que "envia" o valor gerado para o iterator
        i++;
    }
}


// Por retornar um objeto iterador o método next() pode ser chamado
let gerador = geraMultiplosDeN(5);

console.log(gerador.next()); // { value:0, done:false}
console.log(gerador.next()); // { value:3, done:false}
console.log(gerador.next()); // { value:6, done:false}
console.log(gerador.next()); // { value:9, done:false}
console.log(gerador.next()); // { value:12, done:false}
console.log(gerador.next()); // { value:15, done:false}
console.log(gerador.next()); // { value:18, done:false}
