const startButton = document.getElementById('startGame');

startButton.addEventListener('click', () => {
  document.querySelector('.welcomeScreen').style.display = 'none';
  document.querySelector(".game").style.display = 'static';
  startGame();
});

function createRoundDiv() {
    const roundDiv = document.createElement("div");
    roundDiv.classList.add("roundCounter");
    roundDiv.textContent = "Round: 1";
    game.appendChild(roundDiv);
}

function DeleteRoundDiv() {
    const roundDiv = document.querySelector(".roundCounter");
    roundDiv.remove();
}

async function startGame() {
    await dogMovement();
    createRoundDiv();
    setTimeout(() => {
        DeleteRoundDiv();
    }, 1000);
    createDuck();
    animateDuck();
}