var functions = [];

function drawGraph(){
    if(checkInput() === true){
        addToFunctions();
        renderFunctionlist(functions[functions.length-1]);
    }else alert("Bitte die eingegebene Funktion überprüfen!");
}

function checkInput(){
    var zeichen = ["0", "1", "2", "3", "4", "5", "6", "7", "8", ,"9", "x", "e", "l", "p", "+", "-", "*", "/", "^", "s", "(", ")"];
    var input = document.getElementById("inputFunction").value;
    input = input.toLowerCase();
    input = replaceAll("sqrt", "s", input);
    input = replaceAll("log", "l", input);
    input = replaceAll("ln", "l(e)", input);
    input = replaceAll("pi", "p", input);
    input = replaceAll(" ", "", input);
    for(var i = 0; i < zeichen.length; i++){
        input = replaceAll(zeichen[i], "", input);
    }
    if(input === ""){
        return true;
    }else return false;
}

function addToFunctions(){
    var input = document.getElementById("inputFunction").value;
    functions.push(input);
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

function replaceAll(search, replaceWith, string){
    var allReplaced = false;
    var adjustedString = string;
    while (allReplaced === false){
        adjustedString = string.replace(search, replaceWith);
        if(adjustedString === string){
            allReplaced = true;
        }else string = adjustedString;
    }
    return adjustedString;
}
