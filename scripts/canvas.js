const maxDistance = 100; // Adjust this value to control attraction range
const maxMovement = 25; // Adjust this value to control maximum movement

var buttons = null;
var buttonContainer = null;
var canvas = null;
var ctx = null;

// Wait for DOM to load to then fetch elements
document.addEventListener('DOMContentLoaded', function() {
    buttons = document.querySelectorAll('.attracted-button');
    buttonContainer = document.getElementById('button-container')
    canvas = document.getElementById('lineCanvas');
    ctx = canvas.getContext('2d');

    // Attach event listeners
    window.addEventListener('resize', handleResize);
    
    // Initial setup
    handleResize();
    requestAnimationFrame(repeatEveryAnimationFrame);

    console.log("Creating new buttons")
    rootNode.getChildren().forEach(addButton)

    console.log("Updating button list")
    updateButtonList()
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

  ctx.beginPath();
  for (let i = 0; i < buttons.length-1; i++) {
    const rect1 = buttons[i].getBoundingClientRect();
    const rect2 = buttons[i+1].getBoundingClientRect();

    const center1X = rect1.left + rect1.width / 2;
    const center1Y = rect1.top + rect1.height / 2;
  
    const center2X = rect2.left + rect2.width / 2;
    const center2Y = rect2.top + rect2.height / 2;

    if (i==0) {
      ctx.moveTo(center1X, center1Y);
      ctx.lineTo(center2X, center2Y);
    } else {
      ctx.lineTo(center1X, center1Y);
      ctx.lineTo(center2X, center2Y);
    }

  }
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

const rootNode = new TreeNode('model');
const rootChildNode1 = new TreeNode('conv1');
const rootChildNode2 = new TreeNode('bn1');
const rootChildNode3 = new TreeNode('maxpool');
const rootChildNode4 = new TreeNode('classifier')
const rootChildNode5 = new TreeNode('layer1')
const rootChildNode6 = new TreeNode('layer2')
const rootChildNode7 = new TreeNode('layer3')
const rootChildNode8 = new TreeNode('layer4')

const layer1ChildNode1 = new TreeNode('0')
const layer10ChildNode1 = new TreeNode('conv1')
const layer10ChildNode2 = new TreeNode('bn1')
const layer10ChildNode3 = new TreeNode('relu')
const layer10ChildNode4 = new TreeNode('conv2')
const layer10ChildNode5 = new TreeNode('bn2')

const layer1ChildNode2 = new TreeNode('1')
const layer11ChildNode1 = new TreeNode('conv1')
const layer11ChildNode2 = new TreeNode('bn1')
const layer11ChildNode3 = new TreeNode('relu')
const layer11ChildNode4 = new TreeNode('conv2')
const layer11ChildNode5 = new TreeNode('bn2')

rootNode.addChild(rootChildNode1)
rootNode.addChild(rootChildNode2)
rootNode.addChild(rootChildNode3)
rootNode.addChild(rootChildNode4)
rootNode.addChild(rootChildNode5)
rootNode.addChild(rootChildNode6)
rootNode.addChild(rootChildNode7)
rootNode.addChild(rootChildNode8)

rootChildNode5.addChild(layer1ChildNode1)
layer1ChildNode1.addChild(layer10ChildNode1)
layer1ChildNode1.addChild(layer10ChildNode2)
layer1ChildNode1.addChild(layer10ChildNode3)
layer1ChildNode1.addChild(layer10ChildNode4)
layer1ChildNode1.addChild(layer10ChildNode5)


rootChildNode5.addChild(layer1ChildNode2)
layer1ChildNode2.addChild(layer11ChildNode1)
layer1ChildNode2.addChild(layer11ChildNode2)
layer1ChildNode2.addChild(layer11ChildNode3)
layer1ChildNode2.addChild(layer11ChildNode4)
layer1ChildNode2.addChild(layer11ChildNode5)

function addButton(item) {
  console.log("Addig new button...")
  const newButton = document.createElement('button');
  newButton.textContent = item.getValue()

  buttonChildren = item.getChildren()
  if (buttonChildren.length != 0) {
    newButton.className = "attracted-button clickable"
    newButton.addEventListener('click', () => {
      buttonContainer.innerHTML = "" // Clear current buttons
      
      // Back button if not top level
      if (item.getValue !== "model") {
        const backButton = document.createElement('button');
        backButton.className = "attracted-button clickable back"
        backButton.textContent = "<- Go Back"
        buttonContainer.appendChild(backButton)
      }

      item.getChildren().forEach(addButton)

    });
    

  } else {
    newButton.className = "attracted-button"
  }

  buttonContainer.appendChild(newButton);
  updateButtonList()
}