const duckContainer = document.querySelector('.duck-container');
let currentWidth = duckContainer.style.left;
let currentHeight = duckContainer.style.bottom;
let posX;
let posY;

/* const fly = [
]; */

function moveDuckStartingPosition() {
  posX += 20;
  posY += 200;
  duckContainer.style.bottom = posX + 'px';
  duckContainer.style.left = posY + 'px';
  requestAnimationFrame(moveDuckStartingPosition);

}

const timing = {
    duration: 3000,
    iterations: Infinity,
};

function fly() {
  posX += 20;
  posY += 200;
  duckContainer.style.bottom = posX + 'px';
  duckContainer.style.left = posY + 'px';
  requestAnimationFrame(fly);
}



function getRandomWidth(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomHeight(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;   
}

window.onload = function() {
  moveDuckStartingPosition();
  fly();
}
