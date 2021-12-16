const cars = {

    popular: {
        maximumSpeed: {min: 180, max: 200}, 
        minimumSpeed: {min: 110, max: 130}, 
        skid: {min: 0.03, max: 0.04}
      },

      sport: {
        maximumSpeed: {min: 195, max: 215}, 
        minimumSpeed: {min: 125, max: 145}, 
        skid: {min: 0.02, max: 0.03}
      },

      superSport: {
        maximumSpeed: {min: 210, max: 230}, 
        minimumSpeed: {min: 140, max: 160}, 
        skid: {min: 0.01, max: 0.0175}
      }
}

function crazyRace(){

    let lapTimes = document.querySelector('input[name="race"]:checked').value;     
    let carFirstChance = Math.random();
    let carSecondChance = Math.random();
    let carThirdChance = Math.random();
    let winLapsOne = 0;
    let winLapsTwo = 0;
    let winLapsThree = 0;

    class Car {
        constructor(minSpeed, maxSpeed, sliping, ownerName){
            this.minSpeed= minSpeed;
            this.maxSpeed= maxSpeed;
            this.sliping= sliping;            
            this.ownerName = ownerName;
        }
    }

    function setCar(carChance,ownerNameSet){
        let maxSpeedSet =0;
        let minSpeedSet = 0;
        let slipingSet = 0;

        if (carChance <= 0.6) {
            maxSpeedSet = Math.random() * (cars.popular.maximumSpeed.max - cars.popular.maximumSpeed.min) + cars.popular.maximumSpeed.min;
            minSpeedSet = Math.random() * (cars.popular.minimumSpeed.max - cars.popular.minimumSpeed.min) + cars.popular.minimumSpeed.min;
            slipingSet = Math.random() * (cars.popular.skid.max - cars.popular.skid.min) + cars.popular.skid.min;
        }

        if (carChance < 0.95) {
            maxSpeedSet = Math.random() * (cars.sport.maximumSpeed.max - cars.sport.maximumSpeed.min) + cars.sport.maximumSpeed.min;
            minSpeedSet = Math.random() * (cars.sport.minimumSpeed.max - cars.sport.minimumSpeed.min) + cars.sport.minimumSpeed.min;
            slipingSet = Math.random() * (cars.sport.skid.max - cars.sport.skid.min) + cars.sport.skid.min;
        }

        if (carChance >= 0.95) {
            maxSpeedSet = Math.random() * (cars.superSport.maximumSpeed.max - cars.superSport.maximumSpeed.min) + cars.superSport.maximumSpeed.min;
            minSpeedSet = Math.random() * (cars.superSport.minimumSpeed.max - cars.superSport.minimumSpeed.min) + cars.superSport.minimumSpeed.min;
            slipingSet = Math.random() * (cars.superSport.skid.max - cars.superSport.skid.min) + cars.superSport.skid.min;
        }

        let theCar = new Car(minSpeedSet,maxSpeedSet,slipingSet,ownerNameSet);
        return theCar;
    }
    
    let carOne = setCar(carFirstChance,'Pedro');
    let carTwo = setCar(carSecondChance,'Juca');
    let carThree = setCar(carThirdChance,'Edna');

    for(let index = 0; index < lapTimes; index +=1) {
        let carOneSpeed = Math.random() * (carOne.maxSpeed - carOne.minSpeed) + carOne.minSpeed;
        let carTwoSpeed = Math.random() * (carTwo.maxSpeed - carTwo.minSpeed) + carTwo.minSpeed;
        let carThreeSpeed = Math.random() * (carThree.maxSpeed - carThree.minSpeed) + carThree.minSpeed;

        carOneSpeed = carOneSpeed - carOneSpeed * carOne.sliping;
        carTwoSpeed = carTwoSpeed - carTwoSpeed * carTwo.sliping;
        carThreeSpeed = carThreeSpeed - carThreeSpeed * carThree.sliping;

        if (carOneSpeed > carThreeSpeed && carOneSpeed > carTwoSpeed) {
            winLapsOne++;
        }

        if (carTwoSpeed > carThreeSpeed && carTwoSpeed > carOneSpeed) {
           winLapsTwo++;
        }

        if (carThreeSpeed > carOneSpeed && carThreeSpeed > carTwoSpeed) {
           winLapsThree++;
        }
    }

    //winners
    if (winLapsOne > winLapsThree && winLapsOne > winLapsTwo) {
        document.getElementById('winner').innerHTML = `${carOne.ownerName} é o campeão com ${winLapsOne} voltas em primeiro lugar`;
    }

    if (winLapsTwo > winLapsThree && winLapsTwo > winLapsOne) {
        document.getElementById('winner').innerHTML = `${carTwo.ownerName} é o campeão com ${winLapsTwo} voltas em primeiro lugar`;
    }

    if (winLapsThree > winLapsOne && winLapsThree > winLapsTwo) {
        document.getElementById('winner').innerHTML = `${carThree.ownerName} é o campeão com ${winLapsThree} voltas em primeiro lugar`;
    }
    
    //sorteio - car one
    if (carFirstChance <= 0.6) {
        document.getElementById('playerOne').innerHTML = `${carOne.ownerName} escolheu o carro popular`;
    }
    
    if (carFirstChance < 0.95) {
        document.getElementById('playerOne').innerHTML = `${carOne.ownerName} escolheu o carro Sport`;
    }

    if (carFirstChance >= 0.95) {
        document.getElementById('playerOne').innerHTML = `${carOne.ownerName} escolheu o carro Super Sport`;
    }

    //car two
    if (carSecondChance <= 0.6) {
        document.getElementById('playerTwo').innerHTML = `${carTwo.ownerName} escolheu o carro popular`;
    }

    if (carSecondChance < 0.95) {
        document.getElementById('playerTwo').innerHTML = `${carTwo.ownerName} escolheu o carro Sport`;
    }

    if (carSecondChance >= 0.95) {
        document.getElementById('playerTwo').innerHTML = `${carTwo.ownerName} escolheu o carro Super Sport`;
    }

    //car three
    if (carThirdChance <= 0.6) {
        document.getElementById('playerThree').innerHTML = `${carThree.ownerName} escolheu o carro popular`;
    }

    if (carThirdChance < 0.95) {
        document.getElementById('playerThree').innerHTML = `${carThree.ownerName} escolheu o carro Sport`;
    }

    if (carThirdChance >= 0.95) {
        document.getElementById('playerThree').innerHTML = `${carThree.ownerName} escolheu o carro Super Sport`;
    }
}