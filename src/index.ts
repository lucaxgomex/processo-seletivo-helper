function pare(evento: any): void {
	evento.preventDefault();
}

function submeteDados(): void {
	var nome: string = (<HTMLInputElement>document.getElementById("Nome")).value;

	var email: string = (<HTMLInputElement>document.getElementById("E-mail")).value;

	var cpf$cnpj: string = (<HTMLInputElement>document.getElementById("CPF/CNPJ")).value;

	var telefone: string = (<HTMLInputElement>document.getElementById("Telefone")).value;

	var cep: string = (<HTMLInputElement>document.getElementById("CEP")).value;

	var logradouro: string = (<HTMLInputElement>document.getElementById("Logradouro")).value;

	var numero: string = (<HTMLInputElement>document.getElementById("Numero")).value;

	var bairro: string = (<HTMLInputElement>document.getElementById("Bairro")).value;

	var cidade: string = (<HTMLInputElement>document.getElementById("Cidade")).value;

	var estado: string = (<HTMLInputElement>document.getElementById("Estado")).value;

	var dados: Array<string> = [
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