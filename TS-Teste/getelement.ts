class Sum {
  constructor(public i: number, public j: number) {}
  greet() {
    return(this.i + this.j);
  }  
}

var button = document.createElement("button");
button.innerText = "SUM";

button.onclick = function() {
  var v = parseFloat((<HTMLInputElement>document.getElementById("Text1")).value);
  var v1 = parseFloat((<HTMLInputElement>document.getElementById("Text2")).value);
  var v2 = new Sum(v, v1);
  
  window.alert(v2.greet().toString());
}

document.body.appendChild(button);
