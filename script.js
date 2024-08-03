document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('profile-picture').src = user.picture.large;
            document.getElementById('name').textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById('email').textContent = user.email;
            document.getElementById('dob').textContent = new Date(user.dob.date).toLocaleDateString();
            document.getElementById('location').textContent = `${user.location.city}, ${user.location.country}`;
            document.getElementById('phone').textContent = user.phone;
        })
        .catch(error => console.error('Error fetching data:', error));
});
