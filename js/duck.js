const game = document.querySelector(".game");
const duckContainer = document.createElement("div");
const duck = document.createElement("div");
duckContainer.classList.add("duck-container");
duck.classList.add("duck");
duckContainer.appendChild(duck);
game.appendChild(duckContainer);


let numberOfMoves = 20;

let currentWidth;
let currentHeight;

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

function initalPosition() {
    /* duckContainer.style.left = 50 * game.offsetWidth / 100 + "px";
    duckContainer.style.bottom = 40 * game.offsetHeight / 100 + "px"; */
    duckContainer.style.transform = 
    "translate("+ generateWidthPixel(25, 75) + "px, "+ 65 * game.offsetHeight / 100 + "px)";
    prevPosX = duckContainer.getBoundingClientRect().x;
    prevPosY = duckContainer.getBoundingClientRect().y;
};
initalPosition();

/* function positionX(direction) {
    if(direction === 1) {
        let posX = Math.random() * maxWidth;
        if (currentWidth + posX > maxWidth) {
            posX = maxWidth - currentWidth;
        }
        return posX.toFixed(0);
    }
    else {
        let posX = Math.random() * minWidth * direction;
        if (currentWidth - posX < minWidth) {
            posX = currentWidth - minWidth;
        }
        return posX.toFixed(0);
    }
} */

/* function positionY(direction){
    if(direction === 1) {
        let posY = Math.random() * maxHeight;
        if (currentHeight + posY > maxHeight) {
            posY = maxHeight - currentHeight;
        }
        return posY.toFixed(0);
    }
    else {
        let posY = Math.random() * minHeight * direction;
        if (currentHeight - posY < minHeight) {
            posY = currentHeight - minHeight;
        }
        return posY.toFixed(0);
    }
} */

function positionX() {
    return Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
}

function positionY() {
    return Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
}


/* const firstFlight = [
    { transform: "translate("+ positionX() + "px, "+ positionY() + "px)" }
]; */

function otherFlights() {
    const posX = positionX();
    const posY = positionY();
    changeDuckBackground(posX, posY, prevPosX, prevPosY);
    prevPosX = posX;
    prevPosY = posY;
    console.log(prevPosX);
    const result = { transform: "translate("+ posX + "px, "+ posY + "px)" }
    return result;
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


const flyAway = [
    { transform: "translate("+ positionX() + "px, "+ -100 + "px)" }
]

let fallDown = [
    { transform: "translate("+duckContainer.getBoundingClientRect().x+"px, "+ 80 * game.offsetHeight / 100 + "px)" }
]

const duration = {
    duration: 2000,
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
    /* animation = duckContainer.animate(firstFlight, duration);
    await new Promise(resolve => animation.onfinish = resolve); */

    for (let i = 1; i < numberOfMoves; i++) {
        animation = duckContainer.animate(otherFlights(), duration);
        await new Promise(resolve => animation.onfinish = resolve);
    }
    
    animation = duckContainer.animate(flyAway, duration);
}

animateDuck();

/* duckContainer.animate(
    {transform: "translate("+ maxWidth +"px,"+ maxHeight +"px)"},
    duration
) */

function fallingDown() {
    duckContainer.animate(
        { transform: "translate("+duckContainer.getBoundingClientRect().x+"px, "+ 80 * game.offsetHeight / 100 + "px)" }, 
        duration);
    duck.style.animation = "fall-down 0.2s steps(1) forwards";
}

console.log(duckContainer);
    
duck.addEventListener("click", (event) => {
    animation.pause();
    fallingDown();
});

window.onclick = () => {
    let audioShuffle = new Audio('/resources/sounds/sniper-rifle.mp3');
    audioShuffle.play();
}