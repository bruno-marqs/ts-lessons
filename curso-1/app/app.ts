// importanto classe
import { NegociacaoController } from "./controllers/negociacao-controller.js";
// instanciando classe
const controller = new NegociacaoController();
// atribuindo variavel elemento DOM
const form = document.querySelector('.form');
// criando eventListener submit
form.addEventListener('submit', event => {
    // evitando refresh da pag
    event.preventDefault();
    //executando funcao do controller
    controller.adiciona();
})