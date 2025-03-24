// load data from local-store
document.getElementById("email").textContent = localStorage.getItem("email-data") || "Not available";
document.getElementById("password").textContent = localStorage.getItem("password-data") || "Not available";
document.getElementById("country").textContent = localStorage.getItem("country-data") || "Not available";
document.getElementById("state").textContent = localStorage.getItem("state-data") || "Not available";
document.getElementById("city").textContent = localStorage.getItem("city-data") || "Not available";
//click and get det
document.addEventListener("DOMContentLoaded", function() {
    const showDetailsButton = document.getElementById("showDetails");
    const detailsContainer = document.querySelector(".details-container");

    if (!showDetailsButton || !detailsContainer) return;

    showDetailsButton.addEventListener("click", function() {
        detailsContainer.style.display = "block";
        setTimeout(() => {
            detailsContainer.style.opacity = "1"; 
        }, 100);
    });
});