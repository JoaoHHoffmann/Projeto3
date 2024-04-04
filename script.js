
function Calcular(){
    //DECLARANDO AS VARIAVEL
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = num1 + num2
}

function Subtrair(){
    //DECLARANDO AS VARIAVEL
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultadoSub").innerHTML = num1 - num2
}