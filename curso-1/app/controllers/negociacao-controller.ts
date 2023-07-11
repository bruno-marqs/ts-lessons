import { Negociacao } from "../models/negociacao.js";

// criando a classe
export class NegociacaoController {
    // criando atributos tipados
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    // criando construtor que percorre arvore DOM
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    // criando funcao para adicionar
    adiciona() {
        //criando expressão regular para selcionar hifens
        const exp = /-/g;
        // convertendo elementos html nos tipos corretos
        const date = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        // instanciando objeto
        const negociacao = new Negociacao(date, quantidade, valor);

        console.log(negociacao)
    }
}