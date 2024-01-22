let pass = document.getElementById("Password");
let confPass = document.getElementById("confPassword");


function checkPasswords(event) {
    event.preventDefault(); // No default submission

    if (pass.value === confPass.value) {
        pass.setCustomValidity(""); // No validation message
        pass.classList.remove("invalid");
        pass.classList.add("valid");
        confPass.setCustomValidity("");
        confPass.classList.remove("invalid");
        confPass.classList.add("valid");
    } else {
        pass.setCustomValidity("Passwords must match"); // Set validation message
        pass.classList.remove("valid");
        pass.classList.add("invalid");
        confPass.setCustomValidity("Passwords must match");
        confPass.classList.remove("valid");
        confPass.classList.add("invalid");
    }
}

pass.addEventListener("input", checkPasswords);
confPass.addEventListener("input", checkPasswords);
