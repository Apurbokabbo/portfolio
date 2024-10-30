// // Initialize EmailJS and set up form submission handling
// function initializeEmailJS() {
//   // Initialize EmailJS
//   emailjs.init("OPgp3Fon1tDaszFAx"); // public key used

//   // Form submission handler
//   document
//     .getElementById("contactForm")
//     .addEventListener("submit", function (event) {
//       event.preventDefault(); // Prevent form from reloading the page

//       // Get form fields
//       const name = document.getElementById("name").value.trim();
//       const email = document.getElementById("email").value.trim();
//       const message = document.getElementById("message").value.trim();
//       const statusMessage = document.getElementById("status-message");
//       const errorMessage = document.getElementById("error-message");

//       // Reset messages
//       statusMessage.textContent = "";
//       errorMessage.textContent = "";

//       // Basic validation
//       if (!name || !email || !message) {
//         errorMessage.textContent = "All fields are required.";
//         return;
//       }
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(email)) {
//         errorMessage.textContent = "Invalid email format.";
//         return;
//       }

//       // Prepare the parameters to send
//       const templateParams = {
//         to_name: name,
//         from_name: email,
//         message: message,
//         reply_to: email,
//       };
      

//       // Send email using EmailJS
//       emailjs.send("Yservice_4eaeg8k", "template_i19ur1d", templateParams).then(
//         function (response) {
//           statusMessage.textContent = "Message sent successfully!";
//           document.getElementById("message").reset(); // Clear form fields
//         },
//         function (error) {
//           errorMessage.textContent =
//             "Failed to send message. Please try again.";
//         }
//       );
//     });
// }


function initializeEmailJS() {
  // Initialize EmailJS
  function initializeEmailJS() {
    const publicKey = "OPgp3Fon1tDaszFAx"; // replace with the actual key
    emailjs.init(publicKey); 
    console.log("EmailJS initialized with public key:", publicKey);
  }
  

  // Add form submission handler
  const form = document.getElementById("contactForm");
  if (!form) {
    console.error("Form with ID 'contactForm' not found.");
    return;
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Form field logic...
    console.log("Form submitted successfully.");
  });
}


  // Form submission handler
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusMessage = document.getElementById("status-message");
    const errorMessage = document.getElementById("error-message");

    // Reset messages
    statusMessage.textContent = "";
    errorMessage.textContent = "";

    // Basic validation
    if (!name || !email || !message) {
      errorMessage.textContent = "All fields are required.";
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Invalid email format.";
      return;
    }

    // Prepare the parameters to send
    const templateParams = {
      to_name: name,
      from_name: email,
      message: message,
      reply_to: email,
    };

    // // Log the request parameters before sending
    // console.log("Sending email with the following parameters:", templateParams);

    // // Send email using EmailJS and log the response
    // emailjs.send("Yservice_4eaeg8k", "template_i19ur1d", templateParams).then(
    //   function (response) {
    //     console.log("Email sent successfully:", response);
    //     statusMessage.textContent = "Message sent successfully!";
    //     document.getElementById("contactForm").reset(); // Clear form fields
    //   },
    //   function (error) {
    //     console.error("Failed to send email:", error);
    //     errorMessage.textContent = "Failed to send message. Please try again.";
    //   }
    // );
    emailjs.send("Yservice_4eaeg8k", "template_i19ur1d", templateParams)
  .then(function(response) {
    console.log("Email sent successfully:", response);
    statusMessage.textContent = "Message sent successfully!";
    document.getElementById("contactForm").reset(); // Clear form fields
  })
  .catch(function(error) {
    console.error("Failed to send email:", error);
    errorMessage.textContent = "Failed to send message. Please try again.";
  });





  });


