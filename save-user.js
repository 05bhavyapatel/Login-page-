document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".add-btn").addEventListener("click", () => {
        let email = document.getElementById("email1").value.trim();
        let password = document.getElementById("password1").value.trim();
        let country = document.getElementById("country1").value.trim();
        let state = document.getElementById("state1").value.trim();
        let city = document.getElementById("city1").value.trim();

        if (!email || !password || !country || !state || !city) {
            alert("Please fill all fields.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("user-data")) || [];//convert string to js array
        
        users.push({ email, password, country, state, city });

        localStorage.setItem("user-data", JSON.stringify(users));

        alert("User added successfully!");

        // Clear input fields
        document.getElementById("email1").value = "";
        document.getElementById("password1").value = "";
        document.getElementById("country1").value = "";
        document.getElementById("state1").value = "";
        document.getElementById("city1").value = "";
    });

    document.querySelector(".check-btn").addEventListener("click", () => {
        window.location.href = "user-details.html";  // Redirect -> display page
    });
});
