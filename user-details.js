document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".check-btn").addEventListener("click", function() {
        let userTableBody = document.getElementById("userTableBody");

        if (!userTableBody) {
            console.error("Error: 'userTableBody' element not found in HTML.");
            return;
        }

        userTableBody.innerHTML = "";//clear pre d

        // get store ufrom localstorage
        let users = JSON.parse(localStorage.getItem("user-data")) || [];  

        if (users.length === 0) {
            userTableBody.innerHTML = "<tr><td colspan='5'>No user details found</td></tr>";
        } else {
            users.forEach(user => {
                let row = document.createElement("tr"); // Create a new t r
                row.innerHTML = `
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td>${user.country}</td>
                    <td>${user.state}</td>
                    <td>${user.city}</td>
                `;
                userTableBody.appendChild(row);
            });
        }
    });
});