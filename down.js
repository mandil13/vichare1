// When the Enter Site button is clicked, hide the landing page and show main content
document.getElementById("enterButton").addEventListener("click", function() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});

// Toggle nav menu on mobile
document.getElementById("hamburgerMenu").addEventListener("click", function() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
});
// Function to open the modal
function openModal() {
    document.getElementById("modal").classList.remove("hidden");
}

// Function to close the modal
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});
