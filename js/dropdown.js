// Toggle dropdown visibility on click
function toggleDropdown() {
    const dropdown = document.querySelector('.tab-dropdown');
    const buttons = document.querySelector('.tab-buttons');
  
    // Toggle active class and visibility
    if (buttons.style.display === 'block') {
      buttons.style.display = 'none';
      dropdown.classList.remove('active');
    } else {
      buttons.style.display = 'block';
      dropdown.classList.add('active');
    }
  }
  
  // Open a specific tab and show its content
  function openTab(event, tabName) {
    // Hide all tab contents
    const tabContent = document.querySelectorAll('.tabcontent');
    tabContent.forEach((content) => {
      content.style.display = 'none';
    });
  
    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach((link) => {
      link.classList.remove('active');
    });
  
    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
      selectedTab.style.display = 'block';
    }
  
    // Add active class to the clicked tab
    if (event && event.currentTarget) {
      event.currentTarget.classList.add('active');
    }
  
    // Hide dropdown menu for mobile after selection
    const buttons = document.querySelector('.tab-buttons');
    if (window.innerWidth <= 768 && buttons) {
      buttons.style.display = 'none';
      const dropdown = document.querySelector('.tab-dropdown');
      if (dropdown) {
        dropdown.classList.remove('active');
      }
    }
  }
  
  // Attach click listeners after DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Attach toggleDropdown to dropdown click
    const dropdown = document.querySelector('.tab-dropdown');
    if (dropdown) {
      dropdown.addEventListener('click', toggleDropdown);
    }
  
    // Attach openTab to all tab buttons
    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach((button) => {
      const tabName = button.textContent.trim();
      button.addEventListener('click', (event) => openTab(event, tabName));
    });
  });
  