function Calcular(funcao){

    var numero_1 = parseInt(document.getElementById('num1').value);

    var numero_2 = parseInt(document.getElementById('num2').value);


    switch(funcao){
        case 'somar': return Somar(numero_1, numero_2);
            break;
        case 'subtrair': return Subtrair(numero_1, numero_2);
            break;
        case 'dividir': return Dividir(numero_1, numero_2);
            break;
        case 'multiplicar': return Multiplicar(numero_1, numero_2);
            break;
        default: 
            document.getElementById('resultado').innerText = "Resultado";
    }
}