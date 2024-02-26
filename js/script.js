// Get the duck element
const duck = document.getElementById('duck');

// Define the duck's initial position and speed
let duckX = 0;
let duckY = 0;
let speed = 5;

// Define a function to make the duck fly
function fly() {
    // Update the duck's position
    duckX += speed;
    duckY += speed;

    // Apply the new position to the duck's style
    duck.style.left = `${duckX}px`;
    duck.style.top = `${duckY}px`;

    // Reverse direction when the duck hits the edge of the screen
    if (duckX > window.innerWidth || duckY > window.innerHeight) {
        speed = -speed;
    } else if (duckX < 0 || duckY < 0) {
        speed = Math.abs(speed);
    }

    // Call the fly function again after a delay
    setTimeout(fly, 100);
}

// Start the duck flying
fly();
