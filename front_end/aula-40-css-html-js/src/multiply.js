const multiply = (multiplying) => (multiplier) => multiplying * multiplier;

const multiply2 = multiply(2);
const multiply4 = multiply(4);
const multiply8 = multiply(8);

console.log(multiply2(6));
console.log(multiply4(8));
console.log(multiply8(9));


