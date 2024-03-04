
const dog = document.getElementById("dog");



function dogMovement() {
    dog.style.zIndex = "30";
    dog.style.transform = "scale(3)";
    return new Promise((resolve) => {
    dogWalk();
    setTimeout(() => {
        dogSmell();
    }, 5500);
    setTimeout(() => {
        dogJump();
    }, 7500);
    setTimeout(() => {
        shrinkDog();
    }, 8000);
    setTimeout(() => {
        hideDog();
    }, 8050);
    setTimeout(() => {
        resolve();;
    }, 9500);
    });
}


const dogWalk = () => {
    dog.className = "walk";
}
const dogSmell = () => {
    dog.className = "smell";
}
const dogJump = () => {
    dog.className = "jump";
}
const shrinkDog = () => {
    dog.style.transform = "scale(2)";
}
const hideDog = () => {
    dog.style.zIndex = "-1";
}

const dogLaugh = () => {
    dog.style.zIndex = "1";
    dog.style.transform = "scale(3)";
    dog.className = "laugh";
    let audioShuffle = new Audio('/resources/sounds/wah-wah.mp3');
    audioShuffle.play();
}
const dogHoldOneDuck = () => {
    dog.style.zIndex = "1";
    dog.style.transform = "scale(3)";
    dog.className = "hold-one-duck";
}
const dogHoldTwoDucks = () => {
    dog.style.zIndex = "1";
    dog.style.transform = "scale(3)";
    dog.className = "hold-two-ducks";
}