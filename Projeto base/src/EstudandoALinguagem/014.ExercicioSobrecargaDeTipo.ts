// Você quer poder reservar uma viagem que começa imediatamente. Atualize a função sobrecarregada ‘reserve’ com
// uma terceira assinatura de chamada que recebe apenas um destino, sem uma data de início explícita. Atualize
// a implementação da função ‘reserve’ para suportar essa nova assinatura sobrecarregada.

// @ts-ignore
type reservation = {
    dataPartida: Date;
    dataChegada?: Date;
    destino?: string;
}

// @ts-ignore
type ReservaSignature = {
    (dataPartida: Date, dataChegada: Date, destino: string): reservation; // Viagens com ida e volta, três argumentos
    (dataPartida: Date, destino: string): reservation; // Viagens apenas de ida, dois argumentos
    (destino: string): reservation; // Viagens imediatas, um argumento
}

// @ts-ignore
let reservaImplementation: ReservaSignature =
        (dataPartidaOuDestino: Date | string, dataChegadaOuDestino: Date | string, destino?: string): reservation => {

    if (typeof dataPartidaOuDestino === "string") {
        return {
            dataPartida: new Date(), // // Data de partida é a data atual
            destino: dataPartidaOuDestino
        };
    }
    if(typeof dataChegadaOuDestino === "string"){
            return {
                dataPartida: dataPartidaOuDestino,
                destino: dataChegadaOuDestino
            };
        }
    else {
        return {
            dataPartida: dataPartidaOuDestino,
            dataChegada: dataChegadaOuDestino,
            destino: destino
        };
    }
}
