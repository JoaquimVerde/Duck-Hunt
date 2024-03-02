const startButton = document.getElementById('startGame');
let numberOfDucksPerRound = 2;
let roundCounter = 1;
let numberOfDucksKilled = 0;
let duckSpeed = 2000;
let duckFlightNumbers = 2;
let numberOfDucksDeployed = 0;


startButton.addEventListener('click', () => {
  document.querySelector('.welcomeScreen').style.display = 'none';
  document.querySelector(".game").style.display = '';
  startGame();
});

function createRoundDiv(roundCounter) {
    const roundDiv = document.createElement("div");
    roundDiv.classList.add("roundCounter");
    roundDiv.textContent = "Round: " + roundCounter;
    game.appendChild(roundDiv);
    setTimeout(() => {roundDiv.remove();}, 1000);
}

function deleteRoundDiv() {
    const roundDiv = document.querySelector(".roundCounter");
    roundDiv.remove();
}

async function startGame() {
    await dogMovement();
    playRound();
}

async function playRound() {
    /* createRoundDiv(roundCounter); */

    startShooting();
    while(numOfBullets > 0 && numberOfDucksDeployed < numberOfDucksPerRound){
        for (let i = 0; i <= numberOfDucksPerRound; i++) {
            if(numOfBullets === 0){
                endRound();
                return;
            }
            createDuck(duckSpeed, duckFlightNumbers);
            numberOfDucksDeployed++;
            await makeDucksFly();
        }
    }
    endRound();
}

function endRound(){
    if(numberOfDucksPerRound / 2 >= numberOfDucksKilled){
        numOfBullets = 5;
        numberOfDucksDeployed = 0;
        endGame();
    }
    else {
        roundCounter++;
        numOfBullets = 5;
        numberOfDucksDeployed = 0;
        playRound();
    }
}

function endGame(){
    document.querySelector('.game').style.display = 'none';
    document.querySelector('.welcomeScreen').style.display = 'block';
    roundCounter = 1;
    numberOfDucksKilled = 0;
}





/* 
    Game ends when player is out of bullets || missed at least 50% of the ducks in a round;
    Round ends when all ducks are shot || when all ducks finish their animation;
    Round counter increments when round ends;
    Round counter is displayed on screen;
    Refill bullets when round starts;



*/