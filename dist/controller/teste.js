"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bancoDeDados_1 = require("../controller/bancoDeDados");
let listaPessoas = [];
(0, bancoDeDados_1.inicializar)();
listaPessoas = (0, bancoDeDados_1.listarPessoas)();
listaPessoas.forEach(pessoa => {
    console.log(pessoa);
});
//# sourceMappingURL=teste.js.map