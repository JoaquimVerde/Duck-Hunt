
const dog = document.getElementById("dog");



window.onload = () => {
    /*dogMovement();*/
}



const dogMovement = () => {

    dogWalk();

    setTimeout(() => {
        dogSmell();
    }, 4500);

    setTimeout(() => {
        dogJump();
    }, 6500);

    setTimeout(() => {
        shrinkDog();
    }, 7000);

    setTimeout(() => {
        hideDog();
    }, 7050);
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
    dog.style.transform = "scale(1)";
}
const hideDog = () => {
    dog.style.zIndex = "-1";
}