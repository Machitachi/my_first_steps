const express = require("express");
const cors = require("cors");
const port = 3001;
const app = express();

//middlewares
app.use( cors() );
app.use( express.json() );


//route
app.get("/", (req,res) => {

    let randomNumber = Math.random() * ((80 - 1) + 1);
    
    let delay = (Math.random() * ((5 - 1) + 1)) * 1000;

    randomNumber = JSON.stringify(randomNumber); 

    let answer = {randomNumber,delay};
    answer = JSON.stringify(answer);

    if (delay > 3001) {
        /* answer = new Error("Error de Timeout"); */
        answer = "Deu error timeout";
        console.log(answer);

        res.status(400).send(answer); 
    } else {
        setTimeout( () => res.send(answer), delay );
      }
        
})

app.listen(port, (e) => {
    if (e) {
        return console.log(`Error ${e}`);
    } else {
        console.log(`Listening at port ${port}`);
    }
})