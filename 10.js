// Show the notification bar when the page loads
window.onload = function() {
    const notificationBar = document.getElementById("notificationBar");
    notificationBar.classList.remove("hidden");
    notificationBar.classList.add("slide-down");
}

// Function to handle "No thanks" button
document.getElementById("noThanksButton").addEventListener("click", function() {
    window.location.href = "https://wa.me/YOUR_WHATSAPP_NUMBER"; // Replace with your WhatsApp link
});

// Function to handle "Join now" button
document.getElementById("joinNowButton").addEventListener("click", function() {
    window.location.href = "newsletter-signup.html"; // Change this to your desired link for joining
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});
