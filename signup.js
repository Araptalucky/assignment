// signup.js
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('#signupForm');
    const btnText = document.querySelector('.btn-text');
    const spinner = document.querySelector('.spinner');

    signupForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        btnText.style.opacity = '0';
        spinner.style.display = 'block';

        const username = document.querySelector('#username').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const confirmPassword = document.querySelector('#confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            btnText.style.opacity = '1';
            spinner.style.display = 'none';
            return;
        }

        // Get existing users
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Check if email already exists
        if (users.some(user => user.email === email)) {
            alert('Email already registered!');
            btnText.style.opacity = '1';
            spinner.style.display = 'none';
            return;
        }

        // Add new user
        users.push({
            username,
            email,
            password
        });

        // Save updated users list
        localStorage.setItem('users', JSON.stringify(users));

        // Simulate API delay
        setTimeout(() => {
            alert('Registration successful! Please login.');
            window.location.href = 'index.html';
        }, 1500);
    });
});