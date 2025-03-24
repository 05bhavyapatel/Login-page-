document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("user-data")) || [];
    let tableBody = document.getElementById("userTableBody");

    if (users.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='5'>No user data available.</td></tr>";
        return;
    }

    users.forEach(user => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.country}</td>
            <td>${user.state}</td>
            <td>${user.city}</td>
        `;
        tableBody.appendChild(row);
    });
});
