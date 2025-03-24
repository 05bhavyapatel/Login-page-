var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'SWFveXhCU2cwdE01RDZZdTNnSTNqcDJWODVGcjNQTjVZRWVsVmY2eQ=='
}

var countrySelect = document.querySelector('.country'),
    stateSelect = document.querySelector('.state'),
    citySelect = document.querySelector('.city')

function loadCountries() {

    let apiEndPoint = config.cUrl

    fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(Response => Response.json())
    .then(data => {

        data.forEach(country => {
            const option = document.createElement('option')
            option.value = country.iso2
            option.textContent = country.name 
            countrySelect.appendChild(option)
        })
    })
    .catch(error => console.error('Error loading countries:', error))

    stateSelect.disabled = true
    citySelect.disabled = true
    stateSelect.style.pointerEvents = 'none'
    citySelect.style.pointerEvents = 'none'
}

function loadStates() {
    stateSelect.disabled = false
    citySelect.disabled = true
    stateSelect.style.pointerEvents = 'auto'
    citySelect.style.pointerEvents = 'none'

    const selectedCountryCode = countrySelect.value
    stateSelect.innerHTML = '<option value="">Select State</option>' // clear existing s
    citySelect.innerHTML = '<option value="">Select City</option>' // Clear existing c

    fetch(`${config.cUrl}/${selectedCountryCode}/states`, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(response => response.json())
    .then(data => {

        data.forEach(state => {
            const option = document.createElement('option')
            option.value = state.iso2
            option.textContent = state.name 
            stateSelect.appendChild(option)
        })
    })
    .catch(error => console.error('Error loading countries:', error))
}

function loadCities() {
    citySelect.disabled = false
    citySelect.style.pointerEvents = 'auto'

    const selectedCountryCode = countrySelect.value
    const selectedStateCode = stateSelect.value

    citySelect.innerHTML = '<option value="">Select City</option>' // Clear existing city options

    fetch(`${config.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/cities`, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(response => response.json())
    .then(data => {

        data.forEach(city => {
            const option = document.createElement('option')
            option.value = city.iso2
            option.textContent = city.name 
            citySelect.appendChild(option)
        })
    })
}
window.onload = loadCountries

//n page
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email1");
    const errorMessage = document.getElementById("error-message");

    if (!emailInput || !errorMessage) return;

    emailInput.addEventListener("input", function () {
        const email = this.value.trim();
        
        const regex = /@/;

        if (!regex.test(email)) {
            errorMessage.style.display = "block";
            errorMessage.textContent = "Please enter a valid email address!";
        } else {
            errorMessage.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let signIn = document.getElementById("sign-in");

    signIn.addEventListener("click", (event) => {
        event.preventDefault();

        let email = document.getElementById("email1").value.trim();
        let password = document.getElementById("password1").value.trim();
        let country = document.getElementById("country1").value.trim();
        let state = document.getElementById("state1").value.trim();
        let city = document.getElementById("city1").value.trim();

        if (email === "" || password === "" || country === "" || state === "" || city === "") {
            alert("Please fill in all fields before signing in.");
            return;
        }

        localStorage.setItem("email-data", email);
        localStorage.setItem("password-data", password);
        localStorage.setItem("country-data", country);
        localStorage.setItem("state-data", state);
        localStorage.setItem("city-data", city);
        
        window.location.href = "detail.html";
    });
});