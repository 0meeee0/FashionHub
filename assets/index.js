let faq = document.getElementsByClassName('fqq');

for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        alert('message pour faq');
    });
}

function validateForm() {
    // Get values from input fields (username, email, and password)
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phonenumber = document.getElementById("phonenumber").value;
    // Regex patterns for email and password validation
    var emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    var passwordPattern = /^(?=.[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    // Validate email using regex pattern
    if (!emailPattern.test(email)) {
      alert("Invalid email address!");
      return false; 
    }

    // Validate password using regex pattern
    if (!passwordPattern.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      ); // Show an alert if password is not valid
      return false; // Prevent form submission
    }

     // Validate phone number using regex pattern
     if (!phonePattern.test(phonenumber)) {
        alert("Invalid phone number. Use the format (xxx) xxx-xxxx.");
        return false;
    }
    // Check if the username is empty
    if (username === "") {
      alert("Username is required!"); // Show an alert if username is empty
      return false; // Prevent form submission
    }

    // If all validations pass, the form is considered valid and can be submitted
    return true;
  }