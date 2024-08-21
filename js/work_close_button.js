// Get the modal elements
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var closeButton = document.getElementById("closeButton");
var nextButton = document.getElementById("nextButton");

// Add event listener for closing the modal
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

// Add event listener for next button
nextButton.addEventListener("click", function () {
  // Logic for showing the next image
  showNextImage();
});

// Function to display an image in the modal
function showImage(src) {
  modal.style.display = "block";
  modalImg.src = src;
}

// Function to show the next image
function showNextImage() {
  // Implement your logic here to display the next image
}

// Example usage
// Assume you have an image element that triggers the modal when clicked
document.getElementById("yourImageElementId").onclick = function () {
  showImage(this.src);
};
