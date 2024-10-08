function togglePasswordFields() {
    const checkbox = document.getElementById('updatePassword');
    const passwordFields = document.getElementById('passwordFields');
    if (checkbox.checked) {
        passwordFields.style.display = 'block';
    } else {
        passwordFields.style.display = 'none';
    }
}
