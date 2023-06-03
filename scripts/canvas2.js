document.addEventListener('DOMContentLoaded', () => { 
    const viz = new Visualization(25, 100);
})

class Visualization {
    constructor(maxAttractionMovement, maxAttractionDistance) {
        this.maxAttractionDistance = maxAttractionDistance;
        this.maxAttractionMovement = maxAttractionMovement;

        this.layerTree = this.getInitialLayerTree(); // Returns root node of tree
        this.currentParentNode = this.layerTree; 
        
        // Grab elements
        this.buttons = document.querySelectorAll('.attracted-button');
        this.buttonContainer = document.getElementById('button-container')
        this.canvas = document.getElementById('lineCanvas');
        this.ctx = this.canvas.getContext('2d');
    
        // Bind (for event listeners)
        this.handleResize = this.handleResize.bind(this);
        this.repeatEveryAnimationFrame = this.repeatEveryAnimationFrame.bind(this);
        this.buttonAttractionCheck = this.buttonAttractionCheck.bind(this)
        this.buttonAttractionAdjust = this.buttonAttractionAdjust.bind(this)

        // Attach event listeners for resizing
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        // Attach event listeners for button attraction
        document.addEventListener('mousemove', (event) => this.buttonAttractionCheck(event));

        // Start animation loop
        requestAnimationFrame(this.repeatEveryAnimationFrame);

        // Create initial set of buttons
        this.createBackButton();
        this.createButtons();
    }

    // Resizes the canvas based on given window size
    handleResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    // Checks for button attractio and updates their translate accordingly
    buttonAttractionCheck(event) {
        this.buttons.forEach((button) => this.buttonAttractionAdjust(button, event));
    }

    // Checks if mouse is close enough to button to warrant attractio and modifies translate
    buttonAttractionAdjust(button, event) {
        // Get needed values
        const buttonRect = button.getBoundingClientRect();
        const centerX = buttonRect.left + buttonRect.width / 2;
        const centerY = buttonRect.top + buttonRect.height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;   
        const distanceX = mouseX - centerX;
        const distanceY = mouseY - centerY;
    
        // If within valid distance
        if (Math.abs(distanceX) <= this.maxAttractionDistance && // Check Y
            Math.abs(distanceY) <= this.maxAttractionDistance) { // Check X
            const movementX = (distanceX / this.maxAttractionDistance) * this.maxAttractionMovement;
            const movementY = (distanceY / this.maxAttractionDistance) * this.maxAttractionMovement;
    
            button.style.transform = `translate(${movementX}px, ${movementY}px)`;
        } else {
            button.style.transform = 'translate(0, 0)';
        }
    }

    // Called every animation frame given to browser
    repeatEveryAnimationFrame() {
        this.updateLines(); // Update lines every frame

        // Recursive call for next frame
        requestAnimationFrame(this.repeatEveryAnimationFrame);
    }

    // Function to update line positions
    updateLines() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear canvas
        this.ctx.beginPath(); // Start path

        // Creates path across all buttons (Left -> Right)
        for (let i = 0; i < this.buttons.length-1; i++) {
            // Skip back button if it is hidden
            if(this.buttons[i] == this.backButton && this.backButton.classList.contains('hidden')) continue;

            const rect1    = this.buttons[i].getBoundingClientRect();
            const rect2    = this.buttons[i+1].getBoundingClientRect();
            const center1X = rect1.left + rect1.width / 2; // Button Left
            const center1Y = rect1.top + rect1.height / 2;
            const center2X = rect2.left + rect2.width / 2; // Button Right
            const center2Y = rect2.top + rect2.height / 2;

            // If initial button move to the first button position
            if (i==0) this.ctx.moveTo(center1X, center1Y); else this.ctx.lineTo(center1X, center1Y);
            this.ctx.lineTo(center2X, center2Y);

        }
        this.ctx.stroke(); // Draw path
    }

    // Creates and appends buttons to the container based off the current set parent node
    createButtons() {
        let parentNodeChildren = this.currentParentNode.getChildren();
        for (let i = 0; i < parentNodeChildren.length; i++) {

            // Determine button class and onclick
            let className = "attracted-button"; 
            let onclick = "";
            if (parentNodeChildren[i].getChildren().length > 0) {
                className += " clickable";
                onclick = () => this.setCurrentParentNode(parentNodeChildren[i])
            } 
            this.addButtonToContainer(parentNodeChildren[i].getValue(), className, onclick)
            console.log("Added: " + parentNodeChildren[i].getValue());
            this.updateButtonsList();
        }
    }

    // Creates a back button
    createBackButton() {
        let className = "attracted-button clickable back"
        let onclick = () => this.setCurrentParentNode(this.currentParentNode.getParent())
        this.addButtonToContainer("<- Go Back", className, onclick)
        this.backButton = document.querySelectorAll('.attracted-button.clickable.back')[0];
    }

    // Updates the buttons to match new parent node
    updateButtons() {
        // Delete old buttons (not back)
        const buttonsToKeep = document.querySelectorAll('.attracted-button.clickable.back');
        this.buttonContainer.innerHTML = ""; // Clear all buttons

        // Readd backbutton
        buttonsToKeep.forEach(button => {
            this.buttonContainer.appendChild(button);
        });
        
        // Create new buttons
        this.createButtons();
    }

    // Updates the list of buttons used for the visualization
    updateButtonsList() {
        this.buttons = document.querySelectorAll('.attracted-button');
    }

    // Adds a button to the buttons container
    addButtonToContainer(name, className, onclick) {
        const newButton = document.createElement('button');
        newButton.textContent = name;
        newButton.className = className;
        newButton.onclick = onclick;
        this.buttonContainer.appendChild(newButton);
    }

    // SETTERS
    setCurrentParentNode(node) {
        this.currentParentNode = node;
        console.log("New parent node: " + node.getValue())
        this.updateButtons();


        if (node.getParent() === null) {
            this.backButton.classList.add('hidden')
        } else {
            this.backButton.classList.remove('hidden')
        }
    }

    // GETTERS

    // Gets current set parent node for the visualization
    getCurrentParentNode(node) {
        return this.currentParentNode;
    }

    // Gets a predefined Layer Tree
    getInitialLayerTree() {
        const rootNode = new TreeNode('model');
        const rootChildNode1 = new TreeNode('conv1');
        const rootChildNode2 = new TreeNode('bn1');
        const rootChildNode3 = new TreeNode('maxpool');
        const rootChildNode4 = new TreeNode('classifier');
        const rootChildNode5 = new TreeNode('layer1');
        const rootChildNode6 = new TreeNode('layer2');
        const rootChildNode7 = new TreeNode('layer3');
        const rootChildNode8 = new TreeNode('layer4');

        const layer1ChildNode1 = new TreeNode('0');
        const layer10ChildNode1 = new TreeNode('conv1');
        const layer10ChildNode2 = new TreeNode('bn1');
        const layer10ChildNode3 = new TreeNode('relu');
        const layer10ChildNode4 = new TreeNode('conv2');
        const layer10ChildNode5 = new TreeNode('bn2');

        const layer1ChildNode2 = new TreeNode('1');
        const layer11ChildNode1 = new TreeNode('conv1');
        const layer11ChildNode2 = new TreeNode('bn1');
        const layer11ChildNode3 = new TreeNode('relu');
        const layer11ChildNode4 = new TreeNode('conv2');
        const layer11ChildNode5 = new TreeNode('bn2');

        rootNode.addChild(rootChildNode1);
        rootNode.addChild(rootChildNode2);
        rootNode.addChild(rootChildNode3);
        rootNode.addChild(rootChildNode4);
        rootNode.addChild(rootChildNode5);
        rootNode.addChild(rootChildNode6);
        rootNode.addChild(rootChildNode7);
        rootNode.addChild(rootChildNode8);

        rootChildNode5.addChild(layer1ChildNode1);
        layer1ChildNode1.addChild(layer10ChildNode1);
        layer1ChildNode1.addChild(layer10ChildNode2);
        layer1ChildNode1.addChild(layer10ChildNode3);
        layer1ChildNode1.addChild(layer10ChildNode4);
        layer1ChildNode1.addChild(layer10ChildNode5);


        rootChildNode5.addChild(layer1ChildNode2);
        layer1ChildNode2.addChild(layer11ChildNode1);
        layer1ChildNode2.addChild(layer11ChildNode2);
        layer1ChildNode2.addChild(layer11ChildNode3);
        layer1ChildNode2.addChild(layer11ChildNode4);
        layer1ChildNode2.addChild(layer11ChildNode5);

        layer11ChildNode3.addChild(new TreeNode('test'));
        return rootNode;
    }
}