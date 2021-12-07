// function sort(minValue, maxValue) {
//     const diff = maxValue - minValue;
//     const sortValue = Math.round(Math.random() * diff) + minValue;
//     return sortValue;
// }

// function sortValue() {
//     const minValue = 120;
//     const maxValue = 260;
//     const skid = 0.02;

//     const resultBeforeSkid = sort(minValue, maxValue);

//     const resultAfterSkid = resultBeforeSkid - resultBeforeSkid * skid;

//     console.log(`o numero sorteado entre ${minValue} e ${maxValue}, considerando a derrapagem de ${skid} é igual a ${resultAfterSkid}`);    
// }

function crazyRace(){

    let numberWinsPedro = 0;
    let numberWinsJuca = 0;
    let numberWinsEdna = 0;

    for (index = 1; index < 11; index++) {

        const random = function (minValue, maxValue) {
            return Math.random() * ((maxValue - minValue) + minValue);
        }
      
        let numberTurnsPedro = random(150, 230) * 0.97;
        let numberTurnsJuca = random(120, 260) * 0.95;
        let numberTurnsEdna = random(180, 220) * 0.99;        

        if ((numberTurnsPedro > numberTurnsJuca) && (numberTurnsPedro > numberTurnsEdna)) {
            numberWinsPedro += 1;
        } else if ((numberTurnsJuca > numberTurnsPedro) && (numberTurnsJuca > numberTurnsEdna)) {
            numberWinsJuca += 1;
        } else if ((numberTurnsEdna > numberTurnsPedro) && (numberTurnsEdna > numberTurnsJuca)) {
            numberWinsEdna += 1;
        }

        if (index === 10){

            if ((numberWinsPedro > numberWinsJuca) && (numberWinsPedro > numberWinsEdna)) {
                content.innerHTML = "Pedro o imbativel";
            } else if ((numberWinsJuca > numberWinsPedro) && (numberWinsJuca > numberWinsEdna)) {
                content.innerHTML = "Juca está devolta";
            } else if ((numberWinsEdna > numberWinsPedro) && (numberWinsEdna > numberWinsJuca)) {
                content.innerHTML = "Edna a lenda";
            }
        }
    }
}


function bigPrize(){

    let numberWinsPedro = 0;
    let numberWinsJuca = 0;
    let numberWinsEdna = 0;

    for (index = 1; index < 71; index++) {

        const random = function (minValue, maxValue) {
            return Math.random() * ((maxValue - minValue) + minValue);
        }
      
        let numberTurnsPedro = random(150, 230) * 0.97;
        let numberTurnsJuca = random(120, 260) * 0.95;
        let numberTurnsEdna = random(180, 220) * 0.99;        

        if ((numberTurnsPedro > numberTurnsJuca) && (numberTurnsPedro > numberTurnsEdna)) {
            numberWinsPedro += 1;
        } else if ((numberTurnsJuca > numberTurnsPedro) && (numberTurnsJuca > numberTurnsEdna)) {
            numberWinsJuca += 1;
        } else if ((numberTurnsEdna > numberTurnsPedro) && (numberTurnsEdna > numberTurnsJuca)) {
            numberWinsEdna += 1;
        }

        if (index === 70){

            if ((numberWinsPedro > numberWinsJuca) && (numberWinsPedro > numberWinsEdna)) {
                content.innerHTML = "Pedrooooooooooo, o Melhor.";
            } else if ((numberWinsJuca > numberWinsPedro) && (numberWinsJuca > numberWinsEdna)) {
                content.innerHTML = "Juca sempre impressionando";
            } else if ((numberWinsEdna > numberWinsPedro) && (numberWinsEdna > numberWinsJuca)) {
                content.innerHTML = "Edna superou todos.";
            }
        }
    }
}


function enduro(){

    let numberWinsPedro = 0;
    let numberWinsJuca = 0;
    let numberWinsEdna = 0;

    for (index = 1; index < 161; index++) {

        const random = function (minValue, maxValue) {
            return Math.random() * ((maxValue - minValue) + minValue);
        }
      
        let numberTurnsPedro = random(150, 230) * 0.97;
        let numberTurnsJuca = random(120, 260) * 0.95;
        let numberTurnsEdna = random(180, 220) * 0.99;        

        if ((numberTurnsPedro > numberTurnsJuca) && (numberTurnsPedro > numberTurnsEdna)) {
            numberWinsPedro += 1;
        } else if ((numberTurnsJuca > numberTurnsPedro) && (numberTurnsJuca > numberTurnsEdna)) {
            numberWinsJuca += 1;
        } else if ((numberTurnsEdna > numberTurnsPedro) && (numberTurnsEdna > numberTurnsJuca)) {
            numberWinsEdna += 1;
        }

        if (index === 160){

            if ((numberWinsPedro > numberWinsJuca) && (numberWinsPedro > numberWinsEdna)) {
                content.innerHTML = "Pedro, o grande e espetacular campeão.";
            } else if ((numberWinsJuca > numberWinsPedro) && (numberWinsJuca > numberWinsEdna)) {
                content.innerHTML = "Juca, você nasceu com o dom de ser campeão";
            } else if ((numberWinsEdna > numberWinsPedro) && (numberWinsEdna > numberWinsJuca)) {
                content.innerHTML = "Edna a nova Airton Senna.";
            }
        }
    }
}