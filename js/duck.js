const game = document.querySelector(".game");
let duckContainer;
let duck;
let speed;
let numberOfMoves;
let minWidth;
let maxWidth;
let minHeight;
let maxHeight;
let animation;
let prevPosX;
let prevPosY;
let isAnimationPaused;

function determineLimits(){
    minWidth = generateWidth(1);
    maxWidth = generateWidth(95);
    minHeight = generateHeight(1);
    maxHeight = generateHeight(58);
    console.log(minWidth, maxWidth, minHeight, maxHeight);
}

function createDuck(velocity, flightNumbers) {
    speed = velocity;
    numberOfMoves = flightNumbers;
    isAnimationPaused = false;
    duckContainer = document.createElement("div");
    duck = document.createElement("div");
    duckContainer.classList.add("duck-container");
    duck.classList.add("duck");
    duckContainer.appendChild(duck);
    game.appendChild(duckContainer);
    spawnDuck();
}

function spawnDuck() {
    prevPosX = generateWidth(25, 75);
    prevPosY = generateHeight(65);
    duckContainer.style.transform = 
    "translate("+ prevPosX + "px, "+ prevPosY + "px)";
    duckShootingEvent();
};

function positionX() {
    return Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
}

function positionY() {
    return Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
}

function determineDuckPath(value) {
    const posX = positionX();
    console.log(posX);
    if(!isNaN(value)){
        changeDuckBackground(posX, -100, prevPosX, prevPosY);
        return { transform: "translate("+ posX + "px, -100px)" }
    }
    const posY = positionY();
    console.log(posY);
    changeDuckBackground(posX, posY, prevPosX, prevPosY);
    prevPosX = posX;
    prevPosY = posY;
    return { transform: "translate("+ posX + "px, "+ posY + "px)" }
}

function checkDirectionX(posX, prevPosX) {
    if (prevPosX < posX) {
        return 1;
}
    else {
        return -1;
    }
}

function checkDirectionY(posY, prevPosY) {
    if (prevPosY < posY ) {
        return 1;
    }
    else {
        return -1;
    }
}

function changeDuckBackground(posX, posY, prevPosX, prevPosY) {
    const directionX = checkDirectionX(posX, prevPosX);
    const directionY = checkDirectionY(posY, prevPosY);
    if (directionX === 1 && directionY === 1) {
        duck.style.animation = "fly-right 0.3s steps(3) infinite";
    }
    else if (directionX === 1 && directionY === -1) {
        duck.style.animation = "fly-up-right 0.3s steps(3) infinite";
    }
    else if (directionX === -1 && directionY === 1) {
        duck.style.animation = "fly-left 0.3s steps(3) infinite";
    }
    else {
        duck.style.animation = "fly-up-left 0.3s steps(3) infinite";
    }
}

function generateWidth(min, max) {
    if(isNaN(max)){
        max = min;
    }
    const random = Math.floor(Math.random() * (max - min) + min);
    return (random * game.offsetWidth) / 100;
}

function generateHeight(min, max) {
    if(isNaN(max)){
        max = min;
    }
    const random = Math.floor(Math.random() * (max - min) + min);
    return (random * game.offsetHeight) / 100;
}

async function animateDuck() {
    for (let i = 1; i < numberOfMoves; i++) {
        animation = duckContainer.animate(determineDuckPath(), 
        { duration: speed, easing: "ease-in-out", fill: "forwards" });
        await new Promise(resolve => animation.onfinish = () => {
            if (!isAnimationPaused) {
                resolve();
            }
        });
    }
    return new Promise(resolve => {
    animation = duckContainer.animate(determineDuckPath(0),
        { duration: speed, easing: "ease-in-out", fill: "forwards" })
        .onfinish  = () => {
            if (!isAnimationPaused) {
                duckCleanup();
                resolve();
            
            }
        }
    });
}

async function makeDucksFly() {
    return Promise.race([animateDuck(), duckShootingEvent()]);
}

function duckCleanup() {
    duck.remove();
    duckContainer.remove();
}

function fallingDown() {
    scoreCounter++;
    updateScoreText();
    return new Promise(resolve => {
    duck.style.animation = "fall-down 0.2s steps(1) forwards";
    duckContainer.animate(
        { transform: "translate("+ duckContainer.getBoundingClientRect().x +"px, "+ generateHeight(80) + "px)" }, 
        { duration: speed, easing: "ease-in-out", fill: "forwards" })
        .onfinish  = () => {
            duckCleanup();
            dogHoldOneDuck();
            setTimeout(() => {
                resolve();
            }, 2000);
        }
    });
}

function duckShootingEvent() {
    return new Promise(resolve => {
        duck.addEventListener("click", async () => {
            if(numOfBullets > 0){
                let audioShuffle = new Audio('/resources/sounds/duck-quack.mp3');
                audioShuffle.play();
                animation.pause();
                numberOfDucksKilled++;
                let hitDuck = getHitDuckId(numberOfDucksDeployed);
                paintRed(hitDuck);
                isAnimationPaused = true;
                await fallingDown();
                resolve();
            }
        });
    });
}

const updateScoreText = () => {
    document.getElementById("score-text").textContent = `${scoreCounter}`;
}