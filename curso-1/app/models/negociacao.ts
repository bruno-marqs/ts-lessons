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

    // criando getters
    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor;
    }

    get volume() {
        return this.#quantidade * this.#valor;
    }
}