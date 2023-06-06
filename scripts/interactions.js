// Wait for DOM to load to then fetch elements
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById("dropdown-button");
    const formContainer = document.getElementById("form-container");

    const parser = new Parser();
    const viz = new Visualization(25, 100);
    const tree = parser.parseInput()
    viz.setCurrentParentNode(tree)


    parser.submitButton.addEventListener('click', () => {
      const tree = parser.parseInput()
      viz.setCurrentParentNode(tree)
    })

    dropdownButton.addEventListener("click", function() {
        if (formContainer.style.display === "none") {
          formContainer.style.display = "block"
        } else {
          formContainer.style.display = "none"
        }
      });
});
