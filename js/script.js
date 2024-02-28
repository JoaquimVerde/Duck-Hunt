const game = document.querySelector(".game");
const duckContainer = document.createElement("div");
const duck = document.createElement("div");
duckContainer.classList.add("duck-container");
duck.classList.add("duck");
duckContainer.appendChild(duck);
game.appendChild(duckContainer);


let numberOfMoves = 5;

let currentWidth;
let currentHeight;

let minWidth = game.offsetWidth / 100;
let maxWidth = 90 * game.offsetWidth / 100;

let minHeight = 50 * game.offsetHeight / 100;
let maxHeight = 95 * game.offsetHeight / 100;

let animation;

function generateDir() {
    return Math.random() < 0.5 ? -1 : 1;
}

function initalPosition() {
    currentWidth = generateWidthPixel(25, 75);
    currentHeight = generateHeightPixel(33, 33);
    duckContainer.style.left = currentWidth + "px";
    duckContainer.style.bottom = currentHeight + "px";
};

initalPosition();

function positionX(direction) {
    if(direction === 1) {
        let posX = Math.random() * maxWidth;
        if (currentWidth + posX > maxWidth) {
            posX = maxWidth - currentWidth;
        }
        return posX;
    }
    else {
        let posX = Math.random() * minWidth * direction;
        if (currentWidth - posX < minWidth) {
            posX = currentWidth - minWidth;
        }
        return posX;
    }
}

function positionY(direction){
    if(direction === 1) {
        let posY = Math.random() * maxHeight;
        if (currentHeight + posY > maxHeight) {
            posY = maxHeight - currentHeight;
        }
        return posY;
    }
    else {
        let posY = Math.random() * minHeight * direction;
        if (currentHeight - posY < minHeight) {
            posY = currentHeight - minHeight;
        }
        return posY;
    }
}


const firstFlight = [
    { transform: "translate("+ positionX(generateDir()) + "px, "+ positionY(-1) + "px)" }
];

function otherFlights() {
    return { transform: "translate("+ positionX(generateDir()) + "px, "+ positionY(-1) + "px)" }
}

const flyAway = [
    { transform: "translate("+ positionX(generateDir()) + "px, "+ -maxHeight + "px)" }
]

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
    animation = duckContainer.animate(firstFlight, duration);
    await new Promise(resolve => animation.onfinish = resolve);

    for (let i = 1; i < numberOfMoves; i++) {
        animation = duckContainer.animate(otherFlights(), duration);
        await new Promise(resolve => animation.onfinish = resolve);
    }
    
    animation = duckContainer.animate(flyAway, duration);
}

animateDuck();

function cancel(){
    animation.cancel;
}

/* window.addEventListener("resize", function() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    initalPosition();
}); */