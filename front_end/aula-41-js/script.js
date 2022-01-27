// Crie uma função recursiva que retorne o fatorial de um número inteiro.

const fatorial = (n) => (n === 1) ? 1 : (n * fatorial(n - 1));

console.log(fatorial(3));
console.log(fatorial(5));
console.log(fatorial(6));

// Crie uma função recursiva que receba como parâmetro uma matriz e seja capaz de exibir no console todos os dados que a compõe. 

const matriz = [
    [2, 3, 4],
    [4, 5, 6],
    [9, 8, 7],
];

const matrizes = (n1) => {
    if (n1.length === 0) {
        return n1[0];
    }

    const matriz = (n2) => {
        if (n2.length === 0) {
            return n2[0];
        }
        console.log(n2.shift());
        matriz(n2);
    }

    matriz(n1.shift());
    return matrizes(n1);
}

matrizes(matriz);