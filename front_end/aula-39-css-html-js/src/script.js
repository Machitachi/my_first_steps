const callback = (number) => console.log(number);

const gettingCallback = (a, callback) => callback(a);

gettingCallback('sorteando', callback);

const start = () => {
    let counter = 0;
    const numbersDrawn = document.getElementById("result");
    numbersDrawn.innerHTML = "";

    const drawingNumbers = () => {
        counter++;
        
        if (counter === 6) {
        clearInterval(sort);
    }  

    const random = Math.round(Math.random() * 60);
    let numbers = document.createElement("h2");
    numbers.textContent = random;
    numbersDrawn.appendChild(numbers);
    }

    const sort = setInterval(drawingNumbers, 1_000);
}   