document.addEventListener('DOMContentLoaded', function() {
    displayStoredUsers();
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value, 10);

    if (age >= 18) {
        addUserToStorage(firstName, lastName, age);
        addUserToGrid(firstName, lastName, age);
    } else {
        alert('User must be 18 years or older.');
    }

    document.getElementById('userForm').reset();
});

function addUserToStorage(firstName, lastName, age) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ firstName, lastName, age });
    localStorage.setItem('users', JSON.stringify(users));
}

function displayStoredUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => addUserToGrid(user.firstName, user.lastName, user.age));
}

function addUserToGrid(firstName, lastName, age) {
    const gridContainer = document.getElementById('gridContainer');

    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    const nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${firstName} ${lastName}`;
    gridItem.appendChild(nameElement);

    const ageElement = document.createElement('p');
    ageElement.textContent = `Age: ${age}`;
    gridItem.appendChild(ageElement);

    gridContainer.appendChild(gridItem);
}