import { Pessoa } from "../model/Pessoa";
import { inicializarPessoas, listarPessoas, persistirPessoa } from "../controller/bancoDeDados"

let listaPessoas: Pessoa[] = [];

inicializarPessoas();

listaPessoas = listarPessoas();

listaPessoas.forEach(pessoa => {
    console.log(pessoa);
})