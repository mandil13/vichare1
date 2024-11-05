// Show confirmation modal after download starts
function showConfirmation(event) {
    event.preventDefault(); // Prevent the default download action for a moment
    const link = event.currentTarget;
    
    // Show the confirmation modal
    document.getElementById("confirmationPopup").classList.remove("hidden");
    
    // Delay download to allow modal to show first
    setTimeout(() => {
        window.location.href = link.href; // Trigger the download
    }, 500); // 0.5-second delay for a smooth transition
}

// Close the confirmation modal
function closeConfirmation() {
    document.getElementById("confirmationPopup").classList.add("hidden");
}

const darkModeToggle = document.getElementById('darkModeToggle');
let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');

    if (isDarkMode) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
});
// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

 // Function to show the notification bar when the page loads
window.onload = function() {
    const notificationBar = document.getElementById("notificationBar");
    notificationBar.classList.remove("hidden");
    notificationBar.classList.add("slide-down");

    // Auto-hide the notification after 5 seconds
    setTimeout(() => {
        notificationBar.classList.remove("slide-down");
        notificationBar.classList.add("hidden");
    }, 5000); // 5 seconds delay before hiding
}

// Show the custom modal with "No thanks" and "Join" options
function showDownloadModal() {
    document.getElementById("downloadModal").classList.remove("hidden");
}

// Close the modal when "No thanks" is clicked
function closeDownloadModal() {
    document.getElementById("downloadModal").classList.add("hidden");
}

// Redirect to a newsletter page (or any link) when "Join" is clicked
function joinNewsletter() {
    window.location.href = "newsletter-signup.html"; // Change this to the desired link
}

// Function to handle "Thanks" button
document.getElementById("thanksButton").addEventListener("click", function() {
    const notificationBar = document.getElementById("notificationBar");
    notificationBar.classList.remove("slide-down");
    notificationBar.classList.add("hidden"); // Hide notification when clicked
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});
    // Function to show the ad
    function showAd() {
        document.getElementById('sponsoredAd').style.display = 'block';
    }