document.getElementById("signUp").addEventListener("submit", function(e){
    e.preventDefault();

    const UserName = document.getElementById("UserName").value.trim();
    const FirstName =document.getElementById("FirstName").value.trim(); 
    const LastName =document.getElementById("LastName").value.trim();
    const Email = document.getElementById("Email").value.trim();
    const Password = document.getElementById("Password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorEl = document.getElementById("signUpError");



    if (!UserName || !FirstName || !LastName || !Email || !Password || !confirmPassword) {
        errorEl.textContent = "All fields are required.";
        return;
    }

    if (UserName.length > 10){
        errorEl.textContent = "UserName must be less than 10"
        return;
    }
    if (FirstName.length < 4 ){
        errorEl.textContent = "FirstName must be more than 4"
        return;
    }
    if (LastName.length < 4){
        errorEl.textContent = "LastName must be more than 4"
        return;
    }
    if (Email.length < 6){
        errorEl.textContent = "Email must be more than 6"
        return;
    }
    if (!Email.includes ("@") ){
        errorEl.textContent = "Email must contain @"
        return;
    }

    if (Password.length < 10){
        errorEl.textContent = "Password must be more than 10"
        return;
    }
    if (confirmPassword.length < 10){
        errorEl.textContent = "confirmPassword must be more than 10"
        return;
    }
    if (Password !== confirmPassword){
        errorEl.textContent = "Passwords do not match.";
        return;
    }



       window.location.href = "home.html";

})