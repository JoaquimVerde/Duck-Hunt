let hitDuck1= document.getElementById('duckHitBar1');
let numOfBulletsIma = document.getElementById('numOfBullets');
let numOfBullets = 5;





const paintRed = () => {
    hitDuck1.style.background = "url(/resources/sprites/scoreImages/hit/duckred.png)";
    hitDuck1.style.backgroundSize = "cover";

}


const changeNumOfBullets = (num) => {
    numOfBulletsIma.style.background = "url(/resources/sprites/scoreImages/shot/shot"+num+".png)";
    numOfBulletsIma.style.backgroundSize = "cover";
}
let changeNumOfBulletsWithClick = () => {
    if(numOfBullets >= 0){
     changeNumOfBullets(numOfBullets--);
    }
}

document.addEventListener('click',() => changeNumOfBulletsWithClick());
document.addEventListener('click',() => paintRed());






