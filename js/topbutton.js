// Scroll to Top Button Logic
document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.getElementById("scroll-top");

  window.addEventListener("scroll", function () {
    // Get the total document height
    const documentHeight = document.documentElement.scrollHeight;
    // Get the height of the viewport (visible part of the page)
    const windowHeight = window.innerHeight;
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    console.log("scrollPosition", scrollPosition);
    console.log("windowHeight", windowHeight);

    // Check if the user has scrolled more than 60% of the total page height
    // if (scrollPosition > (documentHeight - windowHeight) * 0.6) {
    //   scrollTopBtn.classList.add("active");
    // } else {
    //   scrollTopBtn.classList.remove("active");
    // }
    if (scrollPosition > 770) {
      console.log("if");

      scrollTopBtn.classList.add("active");
    } else {
      console.log("else");
      scrollTopBtn.classList.remove("active");
    }
  });

  // Scroll to the top of the page when the button is clicked
  scrollTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
