const game = document.querySelector(".game");
let duckContainer;
let duck;

function createDuck() {
    duckContainer = document.createElement("div");
    duck = document.createElement("div");
    duckContainer.classList.add("duck-container");
    duck.classList.add("duck");
    duckContainer.appendChild(duck);
    game.appendChild(duckContainer);
    spawnDuck();
}

let numberOfMoves = 20;

let minWidth = game.offsetWidth / 100;
let maxWidth = 95 * game.offsetWidth / 100;

let minHeight = game.offsetHeight / 100;
let maxHeight = 58 * game.offsetHeight / 100;

let animation;

let prevPosX;
let prevPosY;

function generateDir() {
    return Math.random() < 0.5 ? -1 : 1;
}

function spawnDuck() {
    duckContainer.style.transform = 
    "translate("+ generateWidthPixel(25, 75) + "px, "+ 65 * game.offsetHeight / 100 + "px)";
    duckShootingEvent();
};

function positionX() {
    return Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
}

function positionY() {
    return Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
}

function otherFlights() {
    const posX = positionX();
    const posY = positionY();
    changeDuckBackground(posX, posY, prevPosX, prevPosY);
    prevPosX = posX;
    prevPosY = posY;
    console.log(prevPosX);
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
    if (prevPosY < posY) {
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

const duration = {
    duration: 1000,
    easing: "ease-in-out",
    fill: "forwards"
}


function generateWidthPixel(min, max) {
    const random = Math.floor(Math.random() * (max - min) + min);
    return (random * game.offsetWidth) / 100;
}

function generateHeightPixel(min, max) {
    const random = Math.floor(Math.random() * (max - min) + min);
    return (random * game.offsetHeight) / 100;
}

async function animateDuck() {
    for (let i = 1; i < numberOfMoves; i++) {
        animation = duckContainer.animate(otherFlights(), duration);
        await new Promise(resolve => animation.onfinish = resolve);
    }
    
    animation = duckContainer.animate(flyAway, duration);
}

function fallingDown() {
    duckContainer.animate(
        { transform: "translate("+ duckContainer.getBoundingClientRect().x +"px, "+ 80 * game.offsetHeight / 100 + "px)" }, 
        duration);
    duck.style.animation = "fall-down 0.2s steps(1) forwards";
}

function duckShootingEvent() {
    duck.addEventListener("click", async () => {
        animation.pause();
        fallingDown();
        setTimeout(() => {
            dogHoldOneDuck();
        }, 1000);
        
    });
}

window.onclick = () => {
    let audioShuffle = new Audio('/resources/sounds/sniper-rifle.mp3');
    audioShuffle.play();
}