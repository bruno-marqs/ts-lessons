// criando classe
export class Negociacao {
    // atributos com '_' e tipados
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    // criando construtor com parametros tipados
    constructor(data: Date, quantidade: number, valor: number) {
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