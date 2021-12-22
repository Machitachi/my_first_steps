const carrinho =  {
    popular: {
        maxima : {min: 180, max: 200},
        minima : {min: 110, max: 130},
        derrapagem: {min: 1 - 0.03, max: 1 - 0.04}
    },
    esporte: {
        maxima : {min: 195, max: 215}, 
        minima: {min: 125, max: 145}, 
        derrapagem: {min: 1 - 0.02, max: 1 - 0.03}
    },
    super : {
        maxima: {min: 210, max: 230}, 
        minima: {min: 140, max: 160}, 
        derrapagem: {min: 1 - 0.01, max: 1 - 0.0175}
    }
}

const carRunning = [
    {
        jogador: "pedro",
        carro: {velMin: 0, velMax: 0, skid: 0},
        pontos: 0,
        nivel: 0,
        nivelHTML: 0
    },
    {   
        jogador: "juca",
        carro: {velMin: 0, velMax: 0, skid: 0},
        pontos: 0,
        nivel: 0,
        nivelHTML: 0
    },
    {
        jogador: "edna",
        carro: {velMin: 0, velMax: 0, skid: 0},
        pontos: 0,
        nivel: 0,
        nivelHTML: 0
    }
]

let pedroFirst = false;
let pedroSecond = false;
let pedroThird = false;

let jucaFirst = false;
let jucaSecond = false;
let jucaThird = false;

let ednaFirst = false;
let ednaSecond = false;
let ednaThird = false;

let modo = "";

function preencherArray(){
    const carPedro = sortCar();
    const carJuca = sortCar();
    const carEdna = sortCar();

    carRunning[0].carro.velMin = carPedro[0];
    carRunning[0].carro.velMax = carPedro[1];
    carRunning[0].carro.skid = carPedro[2];
    carRunning[1].carro.velMin = carJuca[0];
    carRunning[1].carro.velMax = carJuca[1];
    carRunning[1].carro.skid = carJuca[2];
    carRunning[2].carro.velMin = carEdna[0];
    carRunning[2].carro.velMax = carEdna[1];
    carRunning[2].carro.skid = carEdna[2];
}



function modoDeCorrida(item, index){
    if (index === 0) {
        if (pedroFirst) {
            if (modo === "rapida") {
                carRunning[0].pontos += 200;
            } else if (modo === "premio") {
                carRunning[0].pontos += 220;
            } else {
                carRunning[0].pontos += 250;
            }
        } else if (pedroSecond) {
            if (modo === "rapida") {
                carRunning[0].pontos += 120; 
            } else if (modo === "premio") {
                carRunning[0].pontos += 130; 
            } else {
                carRunning[0].pontos += 150; 
            }
        } else {
            if (modo === "rapida") {
                carRunning[0].pontos += 50; 
            } else if (modo === "premio") {
                carRunning[0].pontos += 75;
            } else {
                carRunning[0].pontos += 90;
            }
        }
    }

    if(index === 1){
        if (jucaFirst) {
            if (modo === "rapida") {
                carRunning[1].pontos += 200; 
            }else if (modo === "premio") {
                carRunning[1].pontos += 220; 
            } else {
                carRunning[1].pontos += 250;
            }
        } else if (jucaSecond) {
            if (modo === "rapida") {
                carRunning[1].pontos += 120; 
            } else if (modo === "premio") {
                carRunning[1].pontos += 130; 
            } else {
                carRunning[1].pontos += 150; 
            }
        } else {
            if (modo === "rapida") {
                carRunning[1].pontos += 50; 
            } else if (modo === "premio") {
                carRunning[1].pontos += 75;
            } else {
                carRunning[1].pontos += 90;
            }
        }
    }

    if (index === 2) {
        if(ednaFirst) {
            if (modo === "rapida") {
                carRunning[2].pontos += 200; 
            } else if (modo === "premio") {
                carRunning[2].pontos += 220; 
            } else {
                carRunning[2].pontos += 250; 
            }
        } else if (ednaSecond) {
            if (modo === "rapida") {
                carRunning[2].pontos += 120; 
            } else if (modo == "premio") {
                carRunning[2].pontos += 130; 
            } else {
                carRunning[2].pontos += 150; 
            }
        } else {
            if(modo === "rapida") {
                carRunning[2].pontos += 50; 
            } else if (modo === "premio") {
                carRunning[2].pontos += 75;
            } else {
                carRunning[2].pontos += 90;
            }
        }
    }  
}

function calcularNiveis(){

    let pedroPoints = carRunning[0].pontos;
    let jucaPoints = carRunning[1].pontos;
    let ednaPoints = carRunning[2].pontos;    

    if (pedroPoints >= 450 && pedroPoints < 900) {
        carRunning[0].nivel = 0.01;
        carRunning[0].nivelHTML = 1;
    } else if (pedroPoints >= 900 && pedroPoints < 1350) {
        carRunning[0].nivel = 0.02;
        carRunning[0].nivelHTML = 2;
    } else if (pedroPoints >= 1350 && pedroPoints < 1800) {
        carRunning[0].nivel = 0.03;
        carRunning[0].nivelHTML = 3;
    } else if (pedroPoints >= 1800 && pedroPoints < 2550) {
        carRunning[0].nivel = 0.04;
        carRunning[0].nivelHTML = 4;
    } else if (pedroPoints >= 2550 && pedroPoints < 2700) {
        carRunning[0].nivel = 0.05;
        carRunning[0].nivelHTML = 5;
    } else if (pedroPoints >= 2700 && pedroPoints < 3150) {
        carRunning[0].nivel = 0.06;
        carRunning[0].nivelHTML = 6;
    } else if (pedroPoints >= 3150 && pedroPoints < 3600) {
        carRunning[0].nivel = 0.07;
        carRunning[0].nivelHTML = 7;
    } else if (pedroPoints >= 3600 && pedroPoints < 4050) {
        carRunning[0].nivel = 0.08;
        carRunning[0].nivelHTML = 8;
    } else if (pedroPoints >= 4050 && pedroPoints < 4500) {
        carRunning[0].nivel = 0.09;
        carRunning[0].nivelHTML = 9;
    } else if (pedroPoints >= 4500) {
        carRunning[0].nivel = 0.1;
        carRunning[0].nivelHTML = 10;
    }
//-------------------------------------------------------------------
    if (jucaPoints >= 450 && jucaPoints < 900) {
        carRunning[1].nivel = 0.01;
        carRunning[1].nivelHTML = 1;
    } else if (jucaPoints >= 900 && jucaPoints < 1350) {
        carRunning[1].nivel = 0.02;
        carRunning[1].nivelHTML = 2;
    } else if (jucaPoints >= 1350 && jucaPoints < 1800) {
        carRunning[1].nivel = 0.03;
        carRunning[1].nivelHTML = 3;
    } else if (jucaPoints >= 1800 && jucaPoints < 2550) {
        carRunning[1].nivel = 0.04;
        carRunning[1].nivelHTML = 4;
    } else if (jucaPoints >= 2550 && jucaPoints < 2700) {
        carRunning[1].nivel = 0.05;
        carRunning[1].nivelHTML = 5;
    } else if (jucaPoints >= 2700 && jucaPoints < 3150) {
        carRunning[1].nivel = 0.06;
        carRunning[1].nivelHTML = 6;
    } else if (jucaPoints >= 3150 && jucaPoints < 3600) {
        carRunning[1].nivel = 0.07;
        carRunning[1].nivelHTML = 7;
    } else if (jucaPoints >= 3600 && jucaPoints < 4050) {
        carRunning[1].nivel = 0.08;
        carRunning[1].nivelHTML = 8;
    } else if (jucaPoints >= 4050 && jucaPoints < 4500) {
        carRunning[1].nivel = 0.09;
        carRunning[1].nivelHTML = 9;
    } else if (jucaPoints >= 4500) {
        carRunning[1].nivel = 0.1;
        carRunning[1].nivelHTML = 10;
    }
//----------------------------------------------------------------------------

    if (ednaPoints >= 450 && ednaPoints < 900) {
        carRunning[2].nivel = 0.01;
        carRunning[2].nivelHTML = 1;
    } else if (ednaPoints >= 900 && ednaPoints < 1350) {
        carRunning[2].nivel = 0.02;
        carRunning[2].nivelHTML = 2;
    } else if (ednaPoints >= 1350 && ednaPoints < 1800) {
        carRunning[2].nivel = 0.03;
        carRunning[2].nivelHTML = 3;
    } else if(ednaPoints >= 1800 && ednaPoints < 2550) {
        carRunning[2].nivel = 0.04;
        carRunning[2].nivelHTML = 4;
    } else if (ednaPoints >= 2550 && ednaPoints < 2700) {
        carRunning[2].nivel = 0.05;
        carRunning[2].nivelHTML = 5;
    } else if (ednaPoints >= 2700 && ednaPoints < 3150) {
        carRunning[2].nivel = 0.06;
        carRunning[2].nivelHTML = 6;
    } else if (ednaPoints >= 3150 && ednaPoints < 3600) {
        carRunning[2].nivel = 0.07;
        carRunning[2].nivelHTML = 7;
    } else if (ednaPoints >= 3600 && ednaPoints < 4050) {
        carRunning[2].nivel = 0.08;
        carRunning[2].nivelHTML = 8;
    } else if (ednaPoints >= 4050 && ednaPoints < 4500) {
        carRunning[2].nivel = 0.09;
        carRunning[2].nivelHTML = 9;
    } else if (ednaPoints >= 4500) {
        carRunning[2].nivel = 0.1;
        carRunning[2].nivelHTML = 10;
    }
}

function sortRarity(){

    let rarity = 0;
    let sort = Math.random();

    if (sort <= 0.6) {
        rarity = 1;
    } else if (sort > 0.6 && sort <= 0.95) {
        rarity = 2;
    } else {
        rarity = 3;
    }
    
    return rarity;
}

function sortCar(){

    const random = (min, max) => (Math.random() * (max- min) + min);
    let tipoDaRaridade = sortRarity();
    let velocidadeMinima;
    let velocidadeMaxima;
    let derrapagem;
    const caracteristicas = new Array();

    if (tipoDaRaridade === 1) {
        velocidadeMinima = random(carrinho.popular.minima.min, carrinho.popular.minima.max);
        velocidadeMaxima = random(carrinho.popular.maxima.min, carrinho.popular.maxima.max);
        derrapagem = random(carrinho.popular.derrapagem.min, carrinho.popular.derrapagem.max);
    } else if (tipoDaRaridade === 2) {
        velocidadeMinima = random(carrinho.esporte.minima.min, carrinho.esporte.minima.max);
        velocidadeMaxima = random(carrinho.esporte.maxima.min, carrinho.esporte.maxima.max);
        derrapagem = random(carrinho.esporte.derrapagem.min, carrinho.esporte.derrapagem.max);
    } else {
        velocidadeMinima = random(carrinho.super.minima.min, carrinho.super.minima.max);
        velocidadeMaxima = random(carrinho.super.maxima.min, carrinho.super.maxima.max);
        derrapagem = random(carrinho.super.derrapagem.min, carrinho.super.derrapagem.max);
    }

    caracteristicas.push(velocidadeMinima);
    caracteristicas.push(velocidadeMaxima);
    caracteristicas.push(derrapagem);
    
    return caracteristicas;
}

function menosRodada(){

    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;
    modo = "rapida";

    preencherArray();

   for (i = 1; i <= 10; i += 1) {

        const random = (min, max) => (Math.random() * (max - min) + min);

        let pedroTurns = random(carRunning[0].carro.velMin + carRunning[0].nivel * carRunning[0].carro.velMin, carRunning[0].carro.velMax + carRunning[0].nivel * carRunning[0].carro.velMax) * carRunning[0].carro.skid;

        let jucaTurns = random(carRunning[1].carro.velMin + carRunning[1].nivel * carRunning[1].carro.velMin, carRunning[1].carro.velMax + carRunning[1].nivel * carRunning[1].carro.velMax) * carRunning[1].carro.skid;

        let ednaTurns = random(carRunning[2].carro.velMin + carRunning[2].nivel * carRunning[2].carro.velMin, carRunning[2].carro.velMax + carRunning[2].nivel * carRunning[2].carro.velMax) * carRunning[2].carro.skid;

        if (pedroTurns > jucaTurns && pedroTurns > ednaTurns) {
            totalPedro += 1;
        } else if (jucaTurns > pedroTurns && jucaTurns > ednaTurns) {
            totalJuca += 1;
        } else if (ednaTurns > pedroTurns && ednaTurns > jucaTurns) {
            totalEdna += 1;
        }

        if(i === 10) {

            pedro.innerHTML = totalPedro;
            juca.innerHTML = totalJuca;
            edna.innerHTML = totalEdna;
            nivelPedro.innerHTML = carRunning[0].nivelHTML;
            nivelJuca.innerHTML = carRunning[1].nivelHTML;
            nivelEdna.innerHTML = carRunning[2].nivelHTML;

            if (totalPedro > totalJuca && totalPedro > totalEdna) {
                content.innerHTML = "Pedro o imbativel";
                pedroFirst = true;

                if (totalJuca > totalEdna) {
                    jucaSecond = true;
                    ednaThird = true;
                } else {
                    ednaSecond = true;
                    jucaThird = true;
                }
            } else if (totalJuca > totalPedro && totalJuca > totalEdna) {
                content.innerHTML = "Juca nasceu pra isso";
                jucaFirst = true; 

                if (totalPedro > totalEdna) {
                    pedroSecond = true;
                    ednaThird = true;
                } else {
                    ednaSecond = true;
                    pedroThird = true;
                }
            } else if (totalEdna > totalPedro && totalEdna > totalJuca) {
                content.innerHTML = "Edna Senna";
                ednaFirst = true;

                if (totalPedro > totalJuca) {
                    jucaThird = true;
                    pedroSecond = true;
                } else {
                    pedroThird = true
                    jucaSecond = true;
                }
            }

            carRunning.forEach(modoDeCorrida);
            calcularNiveis();
            pedroFirst = false;
            pedroSecond = false;
            pedroThird = false;
            jucaFirst = false;
            jucaSecond = false;
            jucaThird = false;
            ednaFirst = false;
            ednaSecond = false;
            ednaThird = false;
        }
    }
}

function mediaRodada(){
    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;
    modo = "premio";
        
    preencherArray()

    for(i = 1; i <= 70; i += 1) {

        const random = (min, max) => (Math.random() * (max- min) + min);

        let pedroTurns = random(carRunning[0].carro.velMin + carRunning[0].nivel * carRunning[0].carro.velMin, carRunning[0].carro.velMax + carRunning[0].nivel * carRunning[0].carro.velMax) * carRunning[0].carro.skid;

        let jucaTurns = random(carRunning[1].carro.velMin + carRunning[1].nivel * carRunning[1].carro.velMin, carRunning[1].carro.velMax + carRunning[1].nivel * carRunning[1].carro.velMax) * carRunning[1].carro.skid;

        let ednaTurns = random(carRunning[2].carro.velMin + carRunning[2].nivel * carRunning[2].carro.velMin, carRunning[2].carro.velMax + carRunning[2].nivel * carRunning[2].carro.velMax) * carRunning[2].carro.skid;

        if (pedroTurns > jucaTurns && pedroTurns > ednaTurns) {
            totalPedro += 1;
        } else if (jucaTurns > pedroTurns && jucaTurns > ednaTurns) {
            totalJuca += 1;
        } else if (ednaTurns > pedroTurns && ednaTurns > jucaTurns) {
            totalEdna += 1;
        }

        if (i === 70) {

            pedro.innerHTML = totalPedro;
            juca.innerHTML = totalJuca;
            edna.innerHTML = totalEdna;
            nivelPedro.innerHTML = carRunning[0].nivelHTML;
            nivelJuca.innerHTML = carRunning[1].nivelHTML;
            nivelEdna.innerHTML = carRunning[2].nivelHTML;

            if (totalPedro > totalJuca && totalPedro > totalEdna) {
                content.innerHTML = "Pedro é espetacular";
                pedroFirst = true;

                if (totalJuca > totalEdna) {
                    jucaSecond = true;
                    ednaThird = true;
                } else {
                    ednaSecond = true;
                    jucaThird = true;
                }

            } else if (totalJuca > totalPedro && totalJuca > totalEdna) {
                content.innerHTML = "Juca sempre vence";
                jucaFirst = true;

                if (totalPedro > totalEdna) {
                    pedroSecond = true;
                    ednaThird = true;
                } else {
                    ednaSecond = true;
                    pedroThird = true;
                }

            } else if (totalEdna > totalPedro && totalEdna > totalJuca) {
                content.innerHTML = "Edna a nova lenda";
                ednaFirst = true;

                if (totalPedro > totalJuca) {
                    jucaThird = true;
                    pedroSecond = true;
                } else {
                    pedroThird = true;
                    jucaSecond = true;
                }
            }

            calcularNiveis();
            carRunning.forEach(modoDeCorrida);
            pedroFirst = false;
            pedroSecond = false;
            pedroThird = false;
            jucaFirst = false;
            jucaSecond = false;
            jucaThird = false;
            ednaFirst = false;
            ednaSecond = false;
            ednaThird = false;
        }
    }  
}

function maximaRodada(){

    let totalPedro = 0;
    let totalJuca = 0;
    let totalEdna = 0;
    modo = "enduro";
        
    preencherArray()

    for(i = 1; i <= 160; i += 1) {

        const random = (min, max) => (Math.random() * (max- min) + min);

        let pedroTurns = random(carRunning[0].carro.velMin + carRunning[0].nivel * carRunning[0].carro.velMin, carRunning[0].carro.velMax + carRunning[0].nivel * carRunning[0].carro.velMax) * carRunning[0].carro.skid;

        let jucaTurns = random(carRunning[1].carro.velMin + carRunning[1].nivel * carRunning[1].carro.velMin, carRunning[1].carro.velMax + carRunning[1].nivel * carRunning[1].carro.velMax) * carRunning[1].carro.skid;

        let ednaTurns = random(carRunning[2].carro.velMin + carRunning[2].nivel * carRunning[2].carro.velMin, carRunning[2].carro.velMax + carRunning[2].nivel * carRunning[2].carro.velMax) * carRunning[2].carro.skid;

        if (pedroTurns > jucaTurns && pedroTurns > ednaTurns) {
            totalPedro += 1;
        } else if (jucaTurns > pedroTurns && jucaTurns > ednaTurns) {
            totalJuca += 1;
        } else if (ednaTurns > pedroTurns && ednaTurns > jucaTurns) {
            totalEdna += 1;
        }

        if (i === 160) {

            pedro.innerHTML = totalPedro;
            juca.innerHTML = totalJuca;
            edna.innerHTML = totalEdna;
            nivelPedro.innerHTML = carRunning[0].nivelHTML;
            nivelJuca.innerHTML = carRunning[1].nivelHTML;
            nivelEdna.innerHTML = carRunning[2].nivelHTML;

            if (totalPedro > totalJuca && totalPedro > totalEdna) {
                content.innerHTML = "Pedro o fantástico";
                pedroFirst = true;

                if (totalJuca > totalEdna) {
                    jucaSecond = true;
                    ednaThird = true;
                } else {
                    ednaSecond = true;
                    jucaThird = true;
                }

            } else if (totalJuca > totalPedro && totalJuca > totalEdna) {
                content.innerHTML = "Juca, vencer é uma obrigação";
                jucaFirst = true;

                if (totalPedro > totalEdna) {
                    pedroSecond = true;
                    ednaThird = true;
                } else {
                    ednaSecond = true;
                    pedroThird = true;
                }

            } else if (totalEdna > totalPedro && totalEdna > totalJuca) {
                content.innerHTML = "Edna, a lenda ressurgiu das cinzas";
                ednaFirst = true;

                if (totalPedro > totalJuca) {
                    jucaThird = true;
                    pedroSecond = true;
                } else {
                    pedroThird = true;
                    jucaSecond = true;
                }
            }

            calcularNiveis();
            carRunning.forEach(modoDeCorrida);
            pedroFirst = false;
            pedroSecond = false;
            pedroThird = false;
            jucaFirst = false;
            jucaSecond = false;
            jucaThird = false;
            ednaFirst = false;
            ednaSecond = false;
            ednaThird = false;
        }
    }
}