// Wait for DOM to load to then fetch elements
document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.getElementById("dropdown-button");
    var formContainer = document.getElementById("form-container");

    dropdownButton.addEventListener("click", function() {
        if (formContainer.style.display === "none") {
          formContainer.style.display = "block"
        } else {
          formContainer.style.display = "none"
        }
      });
});
