// script.js

const signupForm = document.getElementById('signup');
const loginForm = document.getElementById('login');
const container = document.querySelector('.form-container');

let users = [];

// Handle signup
function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Check if user already exists
    if (users.some(user => user.username === username)) {
        alert('User  already exists!');
        return;
    }

    // Add new user
    users.push({ username, password });
    alert('Signup successful! You can now log in.');
    signupForm.reset();
    toggleForms(); // Switch to login form after signup
}

// Handle login
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check if user exists
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
        // Redirect to dashboard
        window.location.href = 'dashboard.html'; // Redirect to dashboard page
    } else {
        alert('Invalid username or password!');
    }
}

// Show login form
function toggleForms() {
    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
}

// Event listeners for buttons
document.getElementById('signup-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    signup();
});

document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    login();
});
