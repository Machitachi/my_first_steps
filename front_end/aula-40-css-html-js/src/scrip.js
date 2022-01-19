document.body.style.fontSize = 20 + "px";

const fontSize = () =>  {

    let font = 20;

    const decreaseFont = () => {
        font -= 2;
        document.body.style.fontSize = font + "px";

        if (font <= 16) {            
            font = 16;
        }
    }

    const increaseFont = () => {
        font += 2;        
        document.body.style.fontSize = font + "px";

        if (font >= 80) {            
            font = 80;
        }
    }

    return {
        decrease: decreaseFont,
        increase: increaseFont,
    };
}

const running = fontSize();
const increasing = () => running.increase();
const decreasing = () => running.decrease();