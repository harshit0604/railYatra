document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const confirmLogout = confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            // Redirect to login page
            window.location.href = '../HTML/login.html';
        }
    });
});
