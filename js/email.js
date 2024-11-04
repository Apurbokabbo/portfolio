// Initialize EmailJS and set up form submission handling
function initializeEmailJS(e) {
  // e.preventDefault();
  console.log("email testing !!!");
  // Initialize EmailJS with your public key
  emailjs.init("OPgp3Fon1tDaszFAx");

  // Form submission handler
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

       // Get form fields
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const statusMessage = document.getElementById("status-message");
      const errorMessage = document.getElementById("error-message");

      // Reset messages
      statusMessage.textContent = "";
      errorMessage.textContent = "";

      if (!name || !email || !message) {
        errorMessage.textContent = "All fields are required.";
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errorMessage.textContent = "Invalid email format.";
        return;
      }

      const templateParams = {
        to_name: "kabbo", // Static value or use form data if needed
        from_name: document.getElementById("name").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("email").value,
      };

      // Prepare the parameters to send
      // const templateParams = {
      //   to_name: name,
      //   from_name: email,
      //   message: message,
      //   reply_to: email,
      // };

      // emailjs.send("service_4eaeg8k", "template_i19ur1d", {
      //   to_name: "kabbo",
      //   from_name: "apurbo",
      //   message: "hello body",
      //   reply_to: "test@gmail.com",
      // });

    

      //   emailjs.send("service_4eaeg8k", "template_i19ur1d", templateParams).then(
      //     function (response) {
      //       statusMessage.textContent = "Message sent successfully!";
      //       document.getElementById("contactForm").reset(); // Clear form fields
      //     },
      //     function (error) {
      //       errorMessage.textContent =
      //         "Failed to send message. Please try again.";
      //       console.error("Error:", error);
      //     }
      //   );
      // });


      emailjs.send("service_4eaeg8k", "template_i19ur1d", templateParams).then(
        function (response) {
          document.getElementById("status-message").textContent =
            "Message sent successfully!";
          document.getElementById("contactForm").reset(); // Clear form fields
        },
        function (error) {
          document.getElementById("error-message").textContent =
            "Failed to send message. Please try again.";
          console.error("Error:", error);
        }
      );
    });
}
