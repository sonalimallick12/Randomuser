document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const randomName = `${user.name.first} ${user.name.last}`;
            
            document.getElementById('profile-picture').src = user.picture.large;
            document.getElementById('hover1').innerText = randomName;
            document.getElementById('hover2').innerText = user.email;
            document.getElementById('hover3').innerText = new Date(user.dob.date).toLocaleDateString();
            document.getElementById('hover4').innerText = `${user.location.city}, ${user.location.country}`;
            document.getElementById('hover5').innerText = user.phone;
            document.getElementById('hover6').innerText = user.login.password;

            // Adding mouseover events
            addMouseoverEvents(randomName, user);
        })
        .catch(error => console.error('Error fetching user data:', error));
});

function addMouseoverEvents(randomName, user) {
    const nameElement = document.getElementById('name-element');
    const descElement = document.getElementById('desc-element');
    const iconElements = document.querySelectorAll('.icon');
    const hoverTextElements = document.querySelectorAll('.hover-text');

    iconElements[0].addEventListener('mouseover', function() {
        displayHoverText(hoverTextElements[0], `Hi, My name is ${randomName}`);
    });

    iconElements[1].addEventListener('mouseover', function() {
        displayHoverText(hoverTextElements[1], `Hi, My email is ${user.email}`);
    });

    iconElements[2].addEventListener('mouseover', function() {
        displayHoverText(hoverTextElements[2], `Hi, My date of birth is ${new Date(user.dob.date).toLocaleDateString()}`);
    });

    iconElements[3].addEventListener('mouseover', function() {
        displayHoverText(hoverTextElements[3], `Hi, My location is ${user.location.city}, ${user.location.country}`);
    });

    iconElements[4].addEventListener('mouseover', function() {
        displayHoverText(hoverTextElements[4], `Hi, My phone number is ${user.phone}`);
    });

    iconElements[5].addEventListener('mouseover', function() {
        displayHoverText(hoverTextElements[5], `Hi, My password is ${user.login.password}`);
    });

    iconElements.forEach((icon, index) => {
        icon.addEventListener('mouseout', function() {
            hoverTextElements[index].innerText = '';
        });
    });
}

function displayHoverText(element, text) {
    element.innerText = text;
}
