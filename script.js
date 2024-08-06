/*var randomname, randomlocation, randomemail, randomdob, randompassword, randomphone;
var img = document.getElementById("profile-picture");
var header = document.querySelector(".header");
var nameElement = document.createElement("h2");  // Create a new element for displaying the name or other info
var descElement = document.createElement("p");  // Create a new element for displaying the description
header.appendChild(nameElement);  // Append the new elements to the header
header.appendChild(descElement);
var iconElement = document.querySelectorAll(".icon img");
var hoverElements = document.querySelectorAll(".hover");

// Generate user data on page load
document.addEventListener("DOMContentLoaded", generateUser);

function generateUser() {
    fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
            const user = data.results[0];
            img.src = user.picture.large;
            randomname = `${user.name.first} ${user.name.last}`;
            randomemail = user.email;
            randomdob = new Date(user.dob.date).toLocaleDateString();
            randomlocation = `${user.location.street.number} ${user.location.street.name}`;
            randomphone = user.phone;
            randompassword = user.login.password;

            // Set default information
            updateInformation("Hi, My name is", randomname, 0);
        })
        .catch((error) => console.error("Error fetching user:", error));
}

iconElement.forEach((icon, index) => {
    icon.addEventListener('mouseover', () => {
        switch (index) {
            case 0:
                updateInformation("Hi, My name is", randomname, index);
                break;
            case 1:
                updateInformation("My email address is", randomemail, index);
                break;
            case 2:
                updateInformation("My birthday is", randomdob, index);
                break;
            case 3:
                updateInformation("My address is", randomlocation, index);
                break;
            case 4:
                updateInformation("My phone number is", randomphone, index);
                break;
            case 5:
                updateInformation("My password is", randompassword, index);
                break;
        }
    });
});

function updateInformation(label, value, activeIndex) {
    nameElement.innerText = label;
    descElement.innerText = value;
    hoverElements.forEach((hover, index) => {
        hover.style.color = index === activeIndex ? "green" : "rgba(128, 128, 128, 0.503)";
    });
    iconElement.forEach((icon, index) => {
        icon.style.color = index === activeIndex ? "green" : "rgba(128, 128, 128, 0.503)";
    });
}*/
var randomname, randomlocation, randomemail, randomdob, randompassword, randomphone;
var img = document.getElementById("profile-picture");
var infoContainer = document.querySelector(".info");  // Changed to select the info container
var nameElement = document.createElement("h2");  // Create a new element for displaying the name or other info
var descElement = document.createElement("p");  // Create a new element for displaying the description
infoContainer.appendChild(nameElement);  // Append the new elements to the info container
infoContainer.appendChild(descElement);
var iconElement = document.querySelectorAll(".icon img");
var hoverElements = document.querySelectorAll(".hover");

// Generate user data on page load
document.addEventListener("DOMContentLoaded", generateUser);

function generateUser() {
    fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
            const user = data.results[0];
            img.src = user.picture.large;
            randomname = `${user.name.first} ${user.name.last}`;
            randomemail = user.email;
            randomdob = new Date(user.dob.date).toLocaleDateString();
            randomlocation = `${user.location.street.number} ${user.location.street.name}`;
            randomphone = user.phone;
            randompassword = user.login.password;

            // Set default information
            updateInformation("Hi, My name is", randomname, 0);
        })
        .catch((error) => console.error("Error fetching user:", error));
}

iconElement.forEach((icon, index) => {
    icon.addEventListener('mouseover', () => {
        switch (index) {
            case 0:
                updateInformation("Hi, My name is", randomname, index);
                break;
            case 1:
                updateInformation("My email address is", randomemail, index);
                break;
            case 2:
                updateInformation("My birthday is", randomdob, index);
                break;
            case 3:
                updateInformation("My address is", randomlocation, index);
                break;
            case 4:
                updateInformation("My phone number is", randomphone, index);
                break;
            case 5:
                updateInformation("My password is", randompassword, index);
                break;
        }
    });
});

function updateInformation(label, value, activeIndex) {
    nameElement.innerText = label;
    descElement.innerText = value;
    hoverElements.forEach((hover, index) => {
        hover.style.color = index === activeIndex ? "green" : "rgba(128, 128, 128, 0.503)";
    });
    iconElement.forEach((icon, index) => {
        icon.style.color = index === activeIndex ? "green" : "rgba(128, 128, 128, 0.503)";
    });
}

