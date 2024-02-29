export class Duck {
    constructor(numberOfMoves, speed, duckContainer){
        this.numberOfMoves = numberOfMoves;
        this.speed = speed;
        this.alive = true;
        this.minWidth = game.offsetWidth / 100;
        this.maxWidth = 95 * game.offsetWidth / 100;
        this.minHeight = game.offsetHeight / 100;
        this.maxHeight = 58 * game.offsetHeight / 100;
        this.duckContainer = duckContainer;
        initalPosition();
    }
    createDuck(){
        const duck = document.createElement('div');
        duck.classList.add('duck');
        this.duckContainer.appendChild(duck);
    }
    initalPosition() {
        this.duckContainer.style.transform = 
        "translate("+ generateWidthPixel(25, 75) + "px, "+ 65 * game.offsetHeight / 100 + "px)";
    }
    fly(){
        let posX = positionX();
        let posY = positionY();
        changeDuckBackground(posX, posY, prevPosX, prevPosY);
        prevPosX = posX;
        prevPosY = posY;
        console.log(prevPosX);
        return { transform: "translate("+ posX + "px, "+ posY + "px)" };
    }
    changeDuckAnimation(){
        const directionX = checkDirectionX(posX, prevPosX);
        const directionY = checkDirectionY(posY, prevPosY);
        if (directionX === 1 && directionY === 1) {
            duck.style.animation = "fly-right 0.3s steps(3) infinite";
        }
        else if (directionX === 1 && directionY === -1) {
            duck.style.animation = "fly-up-right 0.3s steps(3) infinite";
        }
        else if (directionX === -1 && directionY === 1) {
            duck.style.animation = "fly-left 0.3s steps(3) infinite";
        }
        else {
            duck.style.animation = "fly-up-left 0.3s steps(3) infinite";
        }
    }


    
    generatePositionX() {
        return Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
    }
    generatePositionY() {
        return Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
    }
    checkDirectionX(posX, prevPosX) {
        if (prevPosX < posX) {
            return 1;
        }
        else {
            return -1;
        }
    }
    checkDirectionY(posY, prevPosY) {
        if (prevPosY < posY) {
            return 1;
        }
        else {
            return -1;
        }
    }
}