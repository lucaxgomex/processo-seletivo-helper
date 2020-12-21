var Sum = /** @class */ (function () {
    function Sum(i, j) {
        this.i = i;
        this.j = j;
    }
    Sum.prototype.greet = function () {
        return (this.i + this.j);
    };
    return Sum;
}());
var button = document.createElement("button");
button.innerText = "SUM";
button.onclick = function () {
    var v = parseFloat(document.getElementById("Text1").value);
    var v1 = parseFloat(document.getElementById("Text2").value);
    var v2 = new Sum(v, v1);
    window.alert(v2.greet().toString());
};
document.body.appendChild(button);
