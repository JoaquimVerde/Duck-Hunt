const startButton = document.getElementById('startGame');
let numberOfDucksPerRound = 2;
let roundCounter = 1;
let numberOfDucksKilled = 0;
let duckSpeed = 2000;
let duckFlightNumbers = 2;
let numberOfDucksDeployed = 0;
let scoreCounter = 0;


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
}

function DeleteRoundDiv() {
    const roundDiv = document.querySelector(".roundCounter");
    roundDiv.remove();
}

async function startGame() {
    setRoundNumber();
    setScoreNumber();
    await dogMovement();
    playRound();
    
}

function setRoundNumber() {
    let roundElement = document.getElementsByClassName("round")[0];
    let roundText = document.createElement("div");
    roundText.setAttribute("id", "round-text");
    roundText.textContent = `${roundCounter}`;
    roundElement.appendChild(roundText);
}

function setScoreNumber() {
    let scoreElement = document.getElementsByClassName("score")[0];
    let scoreText = document.createElement("div");
    scoreText.setAttribute("id", "score-text");
    scoreText.textContent = `${scoreCounter}`;
    scoreElement.appendChild(scoreText);
}

async function playRound() {
    createRoundDiv(roundCounter);
    setTimeout(() => {DeleteRoundDiv();}, 1000);

    while(numOfBullets > 0 && numberOfDucksDeployed < numberOfDucksPerRound){
        for (let i = 0; i <= numberOfDucksPerRound; i++) {
            if(numOfBullets === 0){
                endRound();
                return;
            }
            createDuck(duckSpeed, duckFlightNumbers);
            numberOfDucksDeployed++;
            await animateDuck();
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