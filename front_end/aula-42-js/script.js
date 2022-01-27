// Baseado nos seus aprendizados crie códigos javascript para exemplificar os seguintes conceitos: 

// 1 - Crie uma função que receba quatro parâmetros e retorne o produto da multiplicação de todos eles. Utilize o spread operator para enviar os itens de um vetor como parâmetros da sua função; 

const vetorMult = [20, 5, 4, 3];

const multiplicar = (number1, number2, number3, number4) => (number1 * number2 * number3 * number4);

console.log(multiplicar(...vetorMult));

// 2 - Crie uma função que receba dois vetores e retorne a concatenação dos dois em um novo vetor. Utilize o spread operator para realizar a concatenação; 

const vetor1 = [2, 3, 4, 5];
const vetor2 = [9, 8, 7, 6];

const concatenarVetor = (vetor1, vetor2) => novoArray = [...vetor1, ...vetor2];

console.log(concatenarVetor(vetor1, vetor2));
 
// 3 - Crie uma função que sorteie 10 números inteiros aleatórios entre 1 e 100 e armazene-os em um vetor. Em seguida retorne o maior valor sorteado entre os 10. Utilize o spread operator combinado com a biblioteca “Math” para escrever seu código.

const sorteio = () => {
    let array = [];

    for (let index = 0; index < 10; index += 1) {
        const sorteiaNumero = Math.round(Math.random() * 100);
        array.push(sorteiaNumero);
    }
    console.log(array);
    return Math.max(...array);
}

console.log(sorteio());