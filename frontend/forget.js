function submitForm() {
    var email = document.getElementById('email').value;
    var successMessage = document.getElementById('successMessage');
    var errorMessage = document.getElementById('errorMessage');

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        // Success case (you can add logic here to send a password reset email)
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        // Error case
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}
