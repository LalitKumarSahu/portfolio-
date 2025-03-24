document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  
  // Check if dark mode is saved in local storage
  if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
  }
  
  darkModeToggle.addEventListener("click", function() {
      body.classList.toggle("dark-mode");
      
      // Save user preference in local storage
      if (body.classList.contains("dark-mode")) {
          localStorage.setItem("darkMode", "enabled");
      } else {
          localStorage.setItem("darkMode", "disabled");
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show-menu");
    });
  });
  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
