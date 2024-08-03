document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('profile-picture').src = user.picture.large;
            document.getElementById('user-name').innerText = `${user.name.first} ${user.name.last}`;

            document.getElementById('hover1').innerText = `${user.name.first} ${user.name.last}`;
            document.getElementById('hover2').innerText = user.email;
            document.getElementById('hover3').innerText = new Date(user.dob.date).toLocaleDateString();
            document.getElementById('hover4').innerText = `${user.location.city}, ${user.location.country}`;
            document.getElementById('hover5').innerText = user.phone;
            document.getElementById('hover6').innerText = user.login.password;
        })
        .catch(error => console.error('Error fetching user data:', error));
});
