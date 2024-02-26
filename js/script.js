const duckContainer = document.querySelector(".duck-container");

function moveDuck() {
    const randomX = Math.random() * window.innerWidth - 68;
    const randomY = Math.random() * window.innerHeight/1.5 - 60;
    duckContainer.style.transition = "all 5s";
    duckContainer.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
    setInterval(moveDuck, 1000);
