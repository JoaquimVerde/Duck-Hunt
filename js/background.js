let numOfBulletsIma = document.getElementById('numOfBullets');
let numOfBullets = 5;


function paintRed(duckId){
    duckId.style.background = "url(/resources/sprites/scoreImages/hit/duckred.png)";
    duckId.style.backgroundSize = "100% 100%";

}
function getHitDuckId(numberOfRound) {
    return document.getElementById('duckHitBar'+ numberOfRound);
 }
 function resetHitDucks() {   
    for (let i = 1; i <= numberOfDucksDeployed; i++) {
        let duckId = getHitDuckId(i);
        if (duckId) {
            duckId.style.background = "url(/resources/sprites/scoreImages/hit/duckwhite.png)";
            duckId.style.backgroundSize = "100% 100%";
        }
    }
}




const changeNumOfBullets = (num) => {
    numOfBulletsIma.style.background = "url(/resources/sprites/scoreImages/shot/shot"+num+".png)";
    numOfBulletsIma.style.backgroundSize = "100% 100%";
}
let changeNumOfBulletsWithClick = () => {
    if(numOfBullets > 0){
     let audioShuffle = new Audio('/resources/sounds/sniper-rifle.mp3');
     audioShuffle.play();

     changeNumOfBullets(--numOfBullets);
     console.log(numOfBullets);
    }
}
function startShooting(){
    const gameScreen = document.querySelector(".game");
    gameScreen.addEventListener('click',() => {
        changeNumOfBulletsWithClick()});
}
