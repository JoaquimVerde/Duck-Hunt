let numOfBulletsIma = document.getElementById('numOfBullets');
let numOfBullets = 5;

const paintRed = () => {
    hitDuck.style.background = "url(/resources/sprites/scoreImages/hit/duckred.png)";
    hitDuck.style.backgroundSize = "100% 100%";

}
let getHitDuckId = (numberOfRound) => {
   return document.getElementById('duckHitBar'+ numberOfRound);
}
let hitDuck= getHitDuckId(8);



const changeNumOfBullets = (num) => {
    numOfBulletsIma.style.background = "url(/resources/sprites/scoreImages/shot/shot"+num+".png)";
    numOfBulletsIma.style.backgroundSize = "100% 100%";
}
let changeNumOfBulletsWithClick = () => {
    if(numOfBullets > 0){
     let audioShuffle = new Audio('/resources/sounds/sniper-rifle.mp3');
     audioShuffle.play();
     changeNumOfBullets(numOfBullets--);
     console.log(numOfBullets);
    }
    paintRed();
}
function startShooting(){
    const gameScreen = document.querySelector(".game");
    gameScreen.addEventListener('click',() => {
        changeNumOfBulletsWithClick()});
}