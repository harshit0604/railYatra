// Assuming user information is fetched from somewhere (e.g., session storage or database)
document.addEventListener('DOMContentLoaded', function () {
    const userIdField = document.getElementById('userId');
    const fullNameField = document.getElementById('fullName');
    const phoneField = document.getElementById('phoneNumber');

    // Simulating user data fetch (this would be dynamically fetched in a real application)
    // const loggedInUser = {
    //     userId: 'USR12345',
    //     fullName: 'John Doe',
    //     phoneNumber: '9876543210',
    // };

    // Auto-populate user information
    userIdField.value = loggedInUser.userId;
    fullNameField.value = loggedInUser.fullName;
    phoneField.value = loggedInUser.phoneNumber;

    // Form validation on submission
    const form = document.getElementById('ticketForm');
    form.addEventListener('submit', function (event) {
        const age = document.getElementById('userAge').value;
        const mobile = document.getElementById('phoneNumber').value;
        const tickets = document.getElementById('ticketCount').value;

        // Validate age
        if (age <= 0) {
            alert('Please enter a valid age.');
            event.preventDefault();
            return;
        }

        // Validate mobile number (10 digits)
        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile)) {
            alert('Please enter a valid 10-digit mobile number.');
            event.preventDefault();
            return;
        }

        // Validate number of tickets
        if (tickets <= 0) {
            alert('Please enter a valid number of tickets.');
            event.preventDefault();
            return;
        }

        // Successful registration message and redirect
        alert('Ticket booking successful!');
       
    });
});
