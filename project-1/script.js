const themeToggleBtn = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");



themeToggleBtn.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    sunIcon.classList.toggle("hidden");
    moonIcon.classList.toggle("hidden");

    // Store the theme preference in localStorage
    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Check the localStorage for theme preference and apply it on page load
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
} else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
}
const userMenuButton = document.getElementById("user-menu-button");
const userMenu = document.getElementById("user-menu");

// Toggle the dropdown visibility when the button is clicked
userMenuButton.addEventListener("click", function () {
userMenu.classList.toggle("hidden");
});

// Close the dropdown if user clicks outside of it
window.addEventListener("click", function (e) {
if (!userMenu.contains(e.target) && !userMenuButton.contains(e.target)) {
    userMenu.classList.add("hidden");
}
});

// Get all theme toggle buttons
const themeToggleButtons = document.querySelectorAll('.theme-toggle');

themeToggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the icons within the current button's context
        const fillIcon = this.querySelector('.fill-icon');
        const outlineIcon = this.querySelector('.outline-icon');
        
        // Toggle the visibility of the icons
        fillIcon.classList.toggle('hidden');
        outlineIcon.classList.toggle('hidden');
    });
});
