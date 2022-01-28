// Baseado nos seus aprendizados, crie códigos javascript para exemplificar os seguintes conceitos: 

// Crie uma função capaz de receber infinitos parâmetros e arranjá-los em um único array.

const parametros = (...params) => Array.from(params);

console.log(parametros(1,2,3,4,5,6,7,8,9,11,22,33,4,45,{}, 55,67))