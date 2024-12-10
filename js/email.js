// Initialize EmailJS and set up form submission handling
function initializeEmailJS() {
  // Initialize EmailJS with your public key
  emailjs.init("OPgp3Fon1tDaszFAx");

  const form = document.getElementById("contactForm");
  const inputs = form.querySelectorAll(".form-control");
  const statusMessage = document.getElementById("status-message");
  const errorMessage = document.getElementById("error-message");

  // Input focus and blur effects
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "#007780"; // Highlight on focus
    });
    input.addEventListener("blur", () => {
      input.style.borderColor = ""; // Reset border color on blur
      
    });
  });

  // Remove messages after 5 seconds
  const removeMessageAfterDelay = () => {
    setTimeout(() => {
      statusMessage.textContent = "";
      errorMessage.textContent = "";
    }, 5000);
  };

  // Form submission handler
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Reset messages
    statusMessage.textContent = "";
    errorMessage.textContent = "";

    // Validation
    if (!name || !email || !message) {
      errorMessage.textContent = "All fields are required.";
      removeMessageAfterDelay();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Invalid email format.";
      removeMessageAfterDelay();
      return;
    }

    // Prepare email data
    const templateParams = {
      to_name: "Apurbo Kabbo",
      from_name: name,
      message: message,
      reply_to: email,
    };

    // Send email using EmailJS
    emailjs
      .send("service_4eaeg8k", "template_i19ur1d", templateParams)
      .then(
        function () {
          statusMessage.textContent = "Message sent successfully!";
          form.reset(); // Clear form fields
          removeMessageAfterDelay();
        },
        function (error) {
          errorMessage.textContent = "Failed to send message. Please try again.";
          console.error("Error:", error);
          removeMessageAfterDelay();
        }
      );
  });
}
