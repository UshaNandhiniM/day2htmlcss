
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Check user preference from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add("light-mode"); // Default theme
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");
        
        const theme = body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
        localStorage.setItem("theme", theme);
    });
});