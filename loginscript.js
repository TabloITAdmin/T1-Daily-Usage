const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Nes" && password === "00594") {
        window.open("main.html", "_self");
    }
    else if (username === "Wng" && password === "00047") {
        window.open("main.html", "_self");
    }
    else if (username === "marvs" && password === "00622") {
        window.open("main.html", "_self");
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }

})