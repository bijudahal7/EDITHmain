
function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

  
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    
    alert('Registration Successful!\n\nFirst Name: ' + firstName + '\nLast Name: ' + lastName + '\nEmail: ' + email);
    
   
    document.getElementById('registerForm').reset();
}
