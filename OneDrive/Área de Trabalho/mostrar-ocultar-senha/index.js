const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    
    const type = password.type === "password" ? "text" : "password"

    password.type = type;

})