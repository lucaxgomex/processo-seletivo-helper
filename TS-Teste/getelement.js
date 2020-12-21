"use strict";
var Sum = /** @class */ (function () {
    //Inicializacao com dois atributos	
    function Sum(i, j) {
        this.i = i;
        this.j = j;
    }
    //Metodo para realizar a soma
    Sum.prototype.greet = function () {
        return (this.i + this.j);
    };
    return Sum;
}());
/*
var button = document.createElement("button");

button.innerText = "Get the sum";

document.body.appendChild(button);

button.onclick = () =>

*/
function realizaSoma() {
    var element1 = document.getElementById("Text1").value;
    var element2 = document.getElementById("Text2").value;
    var s = new Sum(element1, element2); //Instancia objeto
    window.alert(s.greet().toString()); //Mostrar resultado
}
