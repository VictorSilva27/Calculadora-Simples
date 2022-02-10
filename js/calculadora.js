function Calcular(funcao){

    var numero_1 = parseInt(document.getElementById('num1').value);

    var numero_2 = parseInt(document.getElementById('num2').value);


    switch(funcao){
        case 'somar': Somar(numero_1, numero_2);
            break;
        case 'subtrair': Subtrair(numero_1, numero_2);
            break;
        case 'dividir': Dividir(numero_1, numero_2);
            break;
        case 'multiplicar': Multiplicar(numero_1, numero_2);
            break;
        default: 
            document.getElementById('resultado').innerText = "Resultado";
    }
}