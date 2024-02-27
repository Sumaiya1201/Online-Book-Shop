function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validation
    if (email.trim() === "") {
        document.getElementById("email_error").style.display = "block";
        return false;
    } else {
        document.getElementById("email_error").style.display = "none";
    }

    if (password.trim() === "") {
        document.getElementById("password_error").style.display = "block";
        return false;
    } else {
        document.getElementById("password_error").style.display = "none";
    }

    // Assuming validation passes, redirect to home.html
    window.location.href = "home.html";
    return false; // Prevent default form submission
}


