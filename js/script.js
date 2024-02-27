const duckContainer = document.querySelector(".duck-container");

let posX = -500;
let posY = 25;

function initalPosition() {
    duckContainer.style.bottom = "25%";
    duckContainer.style.left = "50%";
};

const moveDuck = [
    { transform: "translate(0, 0)" },
    { transform: "translate("+ posX +"px, "+ posX  +"px)" }
];

const moveAgain = [
    { transform: "translate("+ posX +"px, "+ posX +"px)" },
    { transform: "translate("+ posY +"px, "+ posY +"px)" }
];

const duration = {
    duration: 500,
    easing: "linear",
    fill: "forwards"
}


window.onload = initalPosition;

duckContainer.animate(moveDuck, duration).onfinish = () => {
  duckContainer.animate(moveAgain, duration);
}