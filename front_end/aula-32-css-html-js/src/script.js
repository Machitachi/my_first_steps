// Crie uma página html contendo 4 campos do tipo numérico. 

// a. Adicione um botão com a função de armazenar os números digitados em um vetor na memória; 
// b. Adicione um botão que reorganize e exiba o vetor ao contrário. Ex.: [0,3,4,9] -> [9,4,3,0] 
// c. Adicione um botão que ordene em ordem crescente e exiba o vetor ordenado. Ex.: [23,7,33,1] -> [1,7,23,33] 

// Obs.: Não será permitido o uso de funções prontas da linguagem, tais como o método sort().

let armazenar = document.getElementById('armazenar');
let inverter = document.getElementById('inverter');
let ordemCrescente = document.getElementById('ordemCrescente');

function armazenarNumeros() {
    let inputNumber1 = document.getElementById('number1').value;
    let inputNumber2 = document.getElementById('number2').value;
    let inputNumber3 = document.getElementById('number3').value;
    let inputNumber4 = document.getElementById('number4').value;    
    let resultadoArmazenado = document.getElementById("resultadoArmazenado");

    let array = [];

    if (inputNumber1 && inputNumber1 && inputNumber3 && inputNumber4) {
        let numeros = '';
        numeros += inputNumber1 + " ";
        numeros += inputNumber2 + " ";
        numeros += inputNumber3 + " ";
        numeros += inputNumber4 + " ";

        array.push(numeros);
        
        resultadoArmazenado.innerHTML += array;
    } 

    return resultadoArmazenado;
}

function inverterNumeros() {
    let inputNumber1 = document.getElementById('number1').value;
    let inputNumber2 = document.getElementById('number2').value;
    let inputNumber3 = document.getElementById('number3').value;
    let inputNumber4 = document.getElementById('number4').value;
    let p = document.getElementById("p");

    let array = [];
    
    array.push(inputNumber1 , inputNumber2 , inputNumber3 , inputNumber4);

    let meuArrayInvertido = array.map(function (item, indice, array){
        return array[array.length - indice - 1];
      });

    let numeros = '';    

    for (let item in meuArrayInvertido) {        
        numeros += meuArrayInvertido[item] + ' ';     
    }

    p.innerHTML += numeros;
    return p;
}




function ordenarNumeros() {
    let inputNumber1 = parseFloat(document.getElementById('number1').value);
    let inputNumber2 = parseFloat(document.getElementById('number2').value);
    let inputNumber3 = parseFloat(document.getElementById('number3').value);
    let inputNumber4 = parseFloat(document.getElementById('number4').value);
    let p1 = document.getElementById("p1");    

    let array = [];
    
    array.push(inputNumber1 , inputNumber2 , inputNumber3 , inputNumber4);       
    
    for (let index = 1; index < array.length; index += 1) {
        for (let item = 0; item < index; item += 1) {
            if (array[index] < array[item]) {
                let posicao = array[index];
                array[index] = array[item];
                array[item] = posicao;    
            }
        }        
    }

    //console.log(array)
    p1.innerHTML += array.join(' ');
    return p1;       
}





















// function removeInput() {
//     inputNumber1 = document.getElementById('number1').value ='';
//     inputNumber2 = document.getElementById('number2').value ='';
//     inputNumber3 = document.getElementById('number3').value ='';
//     inputNumber4 = document.getElementById('number4').value ='';
//     return true;
//   }

       




