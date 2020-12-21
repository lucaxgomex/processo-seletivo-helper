//var nome: string = (<HTMLSelectElement>document.getElementById("Nome")).value;
var nome = document.getElementById("Nome");

//var form = document.getElementById("myForm");

function handleForm(event) { 
	event.preventDefault(); 
} 

nome.addEventListener('submit', handleForm);
/*
function submeteDados() {
	console.log((<HTMLSelectElement>document.getElementById("Nome")).value;);
}
*/

function submeteDados() {
	var valores: Array<string> = {
		"nome": nome,
		"email": email,
		"cpf/cnpj": cpf-cnpj,
		"telefone": telefone,
		"logradouro": logradouro,
		"numero": numero,
		"bairro": bairro,
		"cidade": cidade,
		"estado": estado
	};
}