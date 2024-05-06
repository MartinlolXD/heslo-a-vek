document.getElementById("verificationForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var age = parseInt(document.getElementById("age").value);
    var message = document.getElementById("message");

    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters long.";
        event.preventDefault();
        return;
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        message.textContent = "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        event.preventDefault();
        return;
    }

    if (age < 18 || age > 100 || isNaN(age)) {
        message.textContent = "Age must be between 18 and 100 years.";
        event.preventDefault();
        return;
    }

    // All criteria met
    message.textContent = "Password and age are valid!";
});
