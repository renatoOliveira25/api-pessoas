"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Pessoa_1 = require("../model/Pessoa");
const cors_1 = __importDefault(require("cors"));
const bancoDeDados_1 = require("./bancoDeDados");
// Inicializa uma lista de pessoas
(0, bancoDeDados_1.inicializarPessoas)();
// Cria o servidor express
const app = (0, express_1.default)();
// Define a porta que o servidor vai escutar as requisições
const port = 3000;
// Habilitando o uso de JSON no servidor express
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Primeira rota, a rota principal do servidor
app.get('/', (req, res) => {
    console.log('Recebi sua requisição');
    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});
// Rota para cadastrar uma pessoa
app.post('/cadastro', (req, res) => {
    const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;
    const pessoa = new Pessoa_1.Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);
    console.log(pessoa);
    (0, bancoDeDados_1.persistirPessoa)(pessoa);
    res.json({ mensagem: "Pessoa cadastrada com sucesso" });
});
// Rota para consultar pessoas
app.get('/pessoas', (req, res) => {
    const listaDePessoas = (0, bancoDeDados_1.listarPessoas)();
    console.log(`Retornando a lista das pessoas cadastradas`);
    res.json(listaDePessoas);
});
// Servidor sendo executado
app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map