import express from 'express';
import { Pessoa } from './model/Pessoa';

const router = express.Router();
const pessoa = new Pessoa();

router.get('/', (req, res) => {
    const pessoas = pessoa.listaPessoas();
    res.json(pessoas);
})

export { router }