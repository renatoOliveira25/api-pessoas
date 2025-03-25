import fs from 'fs';

export class Pessoa {
    private arquivoJSON = fs.readFileSync('./assets/pessoas.json', 'utf-8');
    private dados = JSON.parse(this.arquivoJSON);

    public listaPessoas() {
        return this.dados;
    }
}