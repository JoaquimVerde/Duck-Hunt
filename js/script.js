// Get the duck container element
const duckContainer = document.querySelector('.duck-container');

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to move the duck container randomly
function moveDuckContainer() {
  // Get the window dimensions
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Generate random coordinates for the duck container
  const randomX = getRandomNumber(0, windowWidth - duckContainer.offsetWidth);
  const randomY = getRandomNumber(0, windowHeight - duckContainer.offsetHeight);

  // Set the position of the duck container
  duckContainer.style.left = `${randomX}px`;
  duckContainer.style.top = `${randomY}px`;
}

// Call the moveDuckContainer function initially
moveDuckContainer();

// Call the moveDuckContainer function every 3 seconds
setInterval(moveDuckContainer, 3000);
