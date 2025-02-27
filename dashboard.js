// dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }

    // Display username
    const usernameElement = document.getElementById('username');
    if (usernameElement) {
        usernameElement.textContent = currentUser.username;
    }

    // Handle logout
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn?.addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });

    // Protect dashboard route
    function checkAuth() {
        if (!localStorage.getItem('currentUser')) {
            window.location.href = 'index.html';
        }
    }

    // Check authentication status periodically
    setInterval(checkAuth, 1000);
});