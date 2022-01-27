// 1. Crie uma função recursiva que retorne o fatorial de um número inteiro.

const fatorial = (n) => (n === 1) ? n : (n * fatorial(n - 1));

console.log(fatorial(3));
console.log(fatorial(5));
console.log(fatorial(6));

// 2. Crie uma função recursiva que receba como parâmetro uma matriz e seja capaz de exibir no console todos os dados que a compõe. 

const matriz = [
    [2, 3, 4],
    [4, 5, 6],
    [9, 8, 7],
];

const matrizes = (rows) => {
    if (rows.length === 0) {
        return rows[0];
    }

    const matriz = (columns) => {
        if (columns.length === 0) {
            return columns[0];
        }
        
        console.log(columns.shift());
        matriz(columns);
    }

    matriz(rows.shift());
    return matrizes(rows);
}

matrizes(matriz);