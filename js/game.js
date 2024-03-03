const startButton = document.getElementById('startGame');
const restartButton = document.getElementById('restart');
let numberOfDucksPerRound = 2;
let roundCounter = 1;
let numberOfDucksKilled = 0;
let duckSpeed = 2000;
let duckFlightNumbers = 7;
let numberOfDucksDeployed = 0;
let scoreCounter = 0;


startButton.addEventListener('click', () => {
  document.querySelector('.welcomeScreen').style.display = 'none';
  document.querySelector(".game").style.display = '';
  startGame();
});

restartButton.addEventListener('click', () => {
    document.querySelector('.gameOverScreen').style.display = 'none';
    document.querySelector('.welcomeScreen').style.display = 'block';
});

function createRoundDiv(roundCounter) {
    return new Promise(resolve => {
    let roundDiv = document.createElement("div");
    roundDiv.classList.add("roundCounter");
    roundDiv.textContent = "Round: " + roundCounter;
    game.appendChild(roundDiv);
    setTimeout(() => {
        roundDiv.remove();
        resolve();
    }, 1000);
    });
}

async function startGame() {
    determineLimits();
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
const removeRoundText = () => {
    document.getElementById("round-text").remove();
}

function setScoreNumber() {
    let scoreElement = document.getElementsByClassName("score")[0];
    let scoreText = document.createElement("div");
    scoreText.setAttribute("id", "score-text");
    scoreText.textContent = `${scoreCounter}`;
    scoreElement.appendChild(scoreText);
}
const removeScoreText = () => {
    document.getElementById("score-text").remove();
}

async function playRound() {
    setRoundNumber();
    setScoreNumber();
    await createRoundDiv(roundCounter);

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
        removeRoundText();
        removeScoreText();
        roundCounter++;
        numOfBullets = 5;
        numberOfDucksDeployed = 0;
        numberOfDucksKilled = 0;
        playRound();
    }
}

function endGame(){
    document.querySelector('.game').style.display = 'none';
    document.querySelector('.gameOverScreen').style.display = 'block';
    removeRoundText();
    removeScoreText();
    roundCounter = 1;
    scoreCounter = 0;
    numberOfDucksKilled = 0;
}