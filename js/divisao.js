function Dividir(numero_1, numero_2){
    
    if(numero_2 == "0"){

        document.getElementById('resultado').innerText = "Impossivel";
        alert("Impossível dividir por 0");
        
    }else{

        document.getElementById('resultado').innerText =  numero_1 / numero_2;

    }   
}