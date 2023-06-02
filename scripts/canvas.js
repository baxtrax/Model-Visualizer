const maxDistance = 100; // Adjust this value to control attraction range
const maxMovement = 25; // Adjust this value to control maximum movement

var buttons = null;
var canvas = null;
var ctx = null;

// Wait for DOM to load to then fetch elements
document.addEventListener('DOMContentLoaded', function() {
    buttons = document.querySelectorAll('.attracted-button');
    canvas = document.getElementById('lineCanvas');
    ctx = canvas.getContext('2d');

    // Attach event listeners
    window.addEventListener('resize', handleResize);
    
    // Initial setup
    handleResize();
    requestAnimationFrame(repeatEveryAnimationFrame);
});

// Update button attraction
document.addEventListener('mousemove', function(event) {
  buttons.forEach(button => {
    // Get needed values
    const buttonRect = button.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;

    // If within valid distance
    if (Math.abs(distanceX) <= maxDistance && Math.abs(distanceY) <= maxDistance) {
      const movementX = (distanceX / maxDistance) * maxMovement;
      const movementY = (distanceY / maxDistance) * maxMovement;

      button.style.transform = `translate(${movementX}px, ${movementY}px)`;
    } else {
      button.style.transform = 'translate(0, 0)';
    }
  });
});

// Function to update line positions
function updateLines() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

  const rect1 = buttons[0].getBoundingClientRect();
  const rect2 = buttons[1].getBoundingClientRect();
  const rect3 = buttons[2].getBoundingClientRect();

  const center1X = rect1.left + rect1.width / 2;
  const center1Y = rect1.top + rect1.height / 2;

  const center2X = rect2.left + rect2.width / 2;
  const center2Y = rect2.top + rect2.height / 2;

  const center3X = rect3.left + rect3.width / 2;
  const center3Y = rect3.top + rect3.height / 2;

  ctx.beginPath();
  ctx.moveTo(center1X, center1Y);
  ctx.lineTo(center2X, center2Y);
  ctx.lineTo(center3X, center3Y);
  ctx.stroke();
}

function repeatEveryAnimationFrame() {
    // Do whatever
    updateLines();
    requestAnimationFrame(repeatEveryAnimationFrame);
}

function updateButtonList() {
    buttons = document.querySelectorAll('.attracted-button');
}

function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // updateLines();
}