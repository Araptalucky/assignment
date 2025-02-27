// script.js (Login Page)
document.addEventListener('DOMContentLoaded', function() {
    // Sample users database (In real app, this would be on a server)
    const users = [
        { email: 'test@example.com', password: 'password123', username: 'Test User' },
        { email: 'admin@example.com', password: 'admin123', username: 'Admin' }
    ];

    // Store users in localStorage if not already present
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.querySelector('#password');
    
    togglePassword?.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Form submission
    const loginForm = document.querySelector('#loginForm');
    const loginBtn = document.querySelector('.login-btn');
    const btnText = document.querySelector('.btn-text');
    const spinner = document.querySelector('.spinner');

    loginForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        btnText.style.opacity = '0';
        spinner.style.display = 'block';
        loginBtn.disabled = true;

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Simulate API delay
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Store logged-in user info
                localStorage.setItem('currentUser', JSON.stringify({
                    email: user.email,
                    username: user.username
                }));
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid email or password');
                btnText.style.opacity = '1';
                spinner.style.display = 'none';
                loginBtn.disabled = false;
            }
        }, 1500);
    });
});