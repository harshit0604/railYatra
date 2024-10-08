document.getElementById('registerForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Validate that both password match or not ->
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault(); 
        return; 
    }

    
    const mobile = document.getElementById('mobile').value;
    const aadhar = document.getElementById('aadhar').value;

  
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Mobile number must be 10 digits.");
        event.preventDefault();
        return;
    }


    if (aadhar.length !== 12 || isNaN(aadhar)) {
        alert("Aadhar number must be 12 digits.");
        event.preventDefault();
    }


    alert("You have successfully registered!");
});
