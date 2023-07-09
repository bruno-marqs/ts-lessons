// criando classe
export class Negociacao {
    // atributos com '#'
    #data;
    #quantidade;
    #valor;

    // criando construtor
    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }
}