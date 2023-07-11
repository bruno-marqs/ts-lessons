// criando a classe
export class NegociacaoController {
    // criando atributos
    private _inputData;
    private _inputQuantidade;
    private _inputValor;

    // criando construtor que percorre arvore DOM
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    // criando funcao para adicionar
    adiciona() {
        console.log(this._inputData);
        console.log(this._inputQuantidade);
        console.log(this._inputValor);
    }
}