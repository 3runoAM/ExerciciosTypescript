type reservation = {
    dataPartida: Date;
    dataChegada?: Date;
    destino?: string;
}

// Reserva tem dois tipos de assinaturas diferentes
type ReservaSignature = {
    (dataPartida: Date, dataChegada: Date, destino: string): reservation; // Viagens com ida e volta, três argumentos
    (dataPartida: Date, destino: string): reservation; // Viagens apenas de ida, dois argumentos
}

/*Para sobrecarregar uma função, é essencial garantir que todos os tipos possíveis de argumentos
que a função pode receber estejam contemplados. No caso do segundo argumento, dataChegadaOuDestino,
ele aceita um tipo de união: string | Date. Dessa forma comtemplamos  os casos em que a viagem é
apenas de ida ea função recebe somente dois argumentos, a data de partida e o destino.*/

let reservaImplementation: ReservaSignature =
    (dataPartida: Date, dataChegadaOuDestino: Date | string, destino?: string): reservation => {
    if(typeof dataChegadaOuDestino === "string"){
        return {
            dataPartida: dataPartida,
            destino: dataChegadaOuDestino
        };
    }
    else {
        return {
            dataPartida: dataPartida,
            dataChegada: dataChegadaOuDestino,
            destino: destino
        };
    }
}
