var functions = [];

function drawGraph(){
    var input = document.getElementById("inputFunction").value;
    functions.push(input);
    renderFunctionlist(functions[functions.length-1]);
}

function renderFunctionlist(element, index, arr){
    var ol = document.getElementById("functionList");
    var li = document.createElement("li");
    li.setAttribute("class", "item");
    li.setAttribute("id", "1");
    li.innerHTML += element;
    var button = document.createElement("button");
    button.setAttribute("class", "deleteBtn");
    button.setAttribute("onclick", "deleteFunction(this.parentElement)");
    button.innerHTML = "X";
    li.appendChild(button);
    ol.appendChild(li);
}

function deleteFunction(elem) {
    var ol = document.getElementById("functionList");
    var pos = Array.prototype.indexOf.call(ol.childNodes, elem);
    ol.removeChild(elem);
    var removed = functions.splice(pos, 1);
}