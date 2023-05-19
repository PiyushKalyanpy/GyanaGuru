function validateForm(event) {
  event.preventDefault(); // Prevent form submission for now

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Check if email is in correct form
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Email is not in correct form");
    return;
  }

  // Check if password is weak or length is less than 8
  if (password.length < 8) {
    alert("Password is weak or password length is less than 8");
    return;
  }

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    alert("Password and confirm password are not the same");
    return;
  }

  // Form is valid, you can proceed with form submission or other actions
  alert("Form submitted successfully!");
  document.getElementById("myForm").reset(); // Reset the form
}
