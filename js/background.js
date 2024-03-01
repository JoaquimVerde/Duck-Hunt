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
     changeNumOfBullets(numOfBullets--);
     console.log(numOfBullets);
    }
    paintRed();
}
const gameScreen = document.querySelector(".game");
gameScreen.addEventListener('click',() => changeNumOfBulletsWithClick());