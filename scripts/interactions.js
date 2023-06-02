// Wait for DOM to load to then fetch elements
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById("dropdown-button");
    const formContainer = document.getElementById("form-container");

    dropdownButton.addEventListener("click", function() {
        if (formContainer.style.display === "none") {
          formContainer.style.display = "block"
        } else {
          formContainer.style.display = "none"
        }
      });
});
