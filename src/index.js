"use strict";
function pare(evento) {
    evento.preventDefault();
}
function submeteDados() {
    var nome = document.getElementById("Nome").value;
    var email = document.getElementById("E-mail").value;
    var cpf$cnpj = document.getElementById("CPF/CNPJ").value;
    var telefone = document.getElementById("Telefone").value;
    var cep = document.getElementById("CEP").value;
    var logradouro = document.getElementById("Logradouro").value;
    var numero = document.getElementById("Numero").value;
    var bairro = document.getElementById("Bairro").value;
    var cidade = document.getElementById("Cidade").value;
    var estado = document.getElementById("Estado").value;
    var dados = [
        nome,
        email,
        cpf$cnpj,
        telefone,
        cep,
        logradouro,
        numero,
        bairro,
        cidade,
        estado
    ];
    /*
        const fs = require('fs');
    
        fs.writeFile('dadosClientes.txt', dados, (error) => {
            if (error) throw err;
            
        });
    */
    window.alert("Cadastro realizado com sucesso!");
}
