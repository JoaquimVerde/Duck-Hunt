const game = document.querySelector(".game");
const duckContainer = document.createElement("div");
const duck = document.createElement("div");
duckContainer.classList.add("duck-container");
duck.classList.add("duck");
duckContainer.appendChild(duck);
game.appendChild(duckContainer);

let posX;
let posY;
let currentX;
let currentY;
let maxX = convertVwToPx(95, 95);
let maxY = convertVhToPx(99, 99);
let minX = convertVwToPx(1, 1);
let minY = convertVhToPx(40, 40);
let directionX = Math.random() < 0.5 ? -1 : 1;
let directionY = Math.random() < 0.5 ? -1 : 1;

/* window.addEventListener("resize", function() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    initalPosition();
}); */

function initalPosition() {
    const posVW = currentX = convertVwToPx(25, 75);
    const posVH = currentY = convertVhToPx(33, 33);
    duckContainer.style.bottom = posVH + "px";
    duckContainer.style.left = posVW + "px";
};

initalPosition();

function positionX(){
    posX = convertVhToPx(40, 99) - currentX;
    return posX;
}

positionX();

function positionY(){
    posY = convertVwToPx(1, 95) - currentY;
    return posY;
}

positionY();

const firstFlight = [
    { transform: "translate("+ posX + "px, "+ posY + "px)" }
];

const duration = {
    duration: 1000,
    easing: "ease-in-out",
    fill: "forwards"
}

duckContainer.animate(firstFlight, duration);

function convertVhToPx(min, max) {
    const random = Math.floor(Math.random() * (max - min) + min);
    return (random * game.offsetHeight) / 100;
}

function convertVwToPx(min, max) {
    const random = Math.floor(Math.random() * (max - min) + min);
    return (random * game.offsetWidth) / 100;
}