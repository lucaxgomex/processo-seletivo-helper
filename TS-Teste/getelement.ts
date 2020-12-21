class Sum {
  //Inicializacao com dois atributos	
  constructor(public i: string, public j: string) {}

  //Metodo para realizar a soma
  greet() {
    return(this.i + this.j);
  }  
}
/*
var button = document.createElement("button");

button.innerText = "Get the sum";

document.body.appendChild(button);

button.onclick = () => 

*/
function realizaSoma(): void {
  var element1 = (<HTMLInputElement>document.getElementById("Text1")).value;
  var element2 = (<HTMLInputElement>document.getElementById("Text2")).value;

  var s = new Sum(element1, element2); //Instancia objeto
  
  window.alert(s.greet().toString()); //Mostrar resultado
}