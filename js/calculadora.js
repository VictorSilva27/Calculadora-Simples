function Adicao(){
                    
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var resultado = parseInt(num1) + parseInt(num2);

    document.getElementById('resultado').innerText = resultado;
}

function Subtracao(){
                    
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var resultado = parseInt(num1) - parseInt(num2);

    document.getElementById('resultado').innerText = resultado;
}

function Multiplicacao(){
                    
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var resultado = parseInt(num1) * parseInt(num2);

    document.getElementById('resultado').innerText = resultado;
}

function Divisao(){
                    
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var resultado = parseInt(num1) / parseInt(num2);

    document.getElementById('resultado').innerText = resultado;
}
function Macks(){

    document.getElementById('resultado').innerText = "Resultado";
}