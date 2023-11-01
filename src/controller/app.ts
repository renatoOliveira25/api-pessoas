import express from "express";
import { inicializarPessoas, listarPessoas } from "./bancoDeDados";

// Inicializa uma lista de pessoas
inicializarPessoas();

// Cria o servidor express
const app = express();
// Define a porta que o servidor vai escutar as requisições
const port: number = 3000;

// Habilitando o uso de JSON no servidor express
app.use(express.json());

// Primeira rota, a rota principal do servidor
app.get('/', (req, res) => {
    console.log('Recebi sua requisição');

    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição"});
});

// Rota para consultar pessoas
app.get('/pessoas', (req, res) => {
    const listaDePessoas = listarPessoas();

    res.json(listaDePessoas);
});

// Servidor sendo executado
app.listen(port, () => {
    console.log(`Servidor Express ouvindo na endereço http://localhost:${port}/`);
})