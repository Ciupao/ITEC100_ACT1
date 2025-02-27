
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if dark mode is enabled in local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.innerText = "☀️ Light Mode";
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save user preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.innerText = "☀️ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.innerText = "🌙 Dark Mode";
        }
    });
});

function openFullscreen(imgElement) {
    var fullscreenDiv = document.getElementById("fullscreenView");
    var fullscreenImg = document.getElementById("fullscreenImg");
    var fullscreenDesc = document.getElementById("fullscreenDesc");

    fullscreenImg.src = imgElement.src;
    fullscreenDesc.innerHTML = imgElement.nextElementSibling.innerHTML; // Get the description text
    fullscreenDiv.style.display = "flex";
}

function closeFullscreen() {
    document.getElementById("fullscreenView").style.display = "none";
}
