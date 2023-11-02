let faq = document.getElementsByClassName('fqq');

for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        alert('message pour faq');
    });
}
const tmenu = document.querySelector(".navbar-conatiner-burger");
const dmenu = document.getElementById("links");

 function onHumberger(){
if( dmenu.classList.contains("show"))
    dmenu.classList.remove("show")
else
    dmenu.classList.add("show")
}

function validateForm() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phonenumber = document.getElementById("phonenumber").value;

    var emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    var passwordPattern = /^(?=.[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var phonePattern = /^\d{10}$/; 
console.log(username)
    if (!emailPattern.test(email)) {
      alert("Invalid email address!");
      return ; 
    }

    if (!passwordPattern.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
      return ;
    }

     if (!phonePattern.test(phonenumber)) {
        alert("Invalid phone number. Use the format (xxx) xxx-xxxx.");
        return ;
    }

    if (username === "") {
      alert("Username is required!");
    }

     return true;
  }