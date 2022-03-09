// const { application } = require("express");
const express = require("express");
const main = express();
const port = 400;

//middlewares
main.use( express.static("public"));

main.listen(port, (error) => {
    if (error) {
        return console.log(`Error: ${error}`);
    } else {
        console.log(`Listening at port ${port}`);
    }
});