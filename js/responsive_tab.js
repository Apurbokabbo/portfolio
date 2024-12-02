function openTab(event, tabName) {
    // Hide all tab content
    const tabcontents = document.querySelectorAll(".tabcontent");
    tabcontents.forEach((tab) => tab.classList.remove("active"));
  
    // Deactivate all tabs
    const tablinks = document.querySelectorAll(".tablinks");
    tablinks.forEach((tab) => tab.classList.remove("active"));
  
    // Show the selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
      selectedTab.classList.add("active");
    }
  
    // Mark the active tab button if available
    if (event.target.tagName === "BUTTON") {
      event.target.classList.add("active");
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Find the default active tab button and simulate a click
    const defaultTab = document.querySelector(".tablinks.active");
    if (defaultTab) {
      defaultTab.click(); // Trigger click to load default tab content
    } else {
      // Fallback: activate the first tab if no default is set
      const firstTabButton = document.querySelector(".tablinks");
      if (firstTabButton) {
        firstTabButton.click(); // Trigger click to ensure content is shown
      }
    }
  });
  