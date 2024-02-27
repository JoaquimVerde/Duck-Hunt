const dog = document.getElementById("dog");



window.onload = () => {
    /*dogMovement();*/
}



const dogMovement = () => {


    console.log("is running!");

    dogWalk();

    setTimeout(() => {
        dogSmell();
    }, 4500);

    setTimeout(() => {
        dogJump();
    }, 6500);

    setTimeout(() => {
        hideDog();
    }, 8200);
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
const hideDog = () => {
    dog.style.display = "none";
}