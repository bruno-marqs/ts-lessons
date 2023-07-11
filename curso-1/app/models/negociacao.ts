// criando classe
export class Negociacao {
    // atributos com '_' 
    private _data;
    private _quantidade;
    private _valor;

    // criando construtor
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // criando getters
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}