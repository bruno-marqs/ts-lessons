// importando classe
import { Negociacao } from "./models/negociacao.js";

// instanciando classe
const negociacao = new Negociacao(new Date(), 10, 1000);

console.log(negociacao.data);
