console.log("Hello")

const getEmail = document.getElementById("email-input");

function checkEmail() {
    const email = getEmail.value;
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(email.match(re)) {
        console.log("valid")
        document.getElementById("result").style.display = "none"
        document.getElementById("errorIcon").style.display = "none"
        document.getElementById("email-input").style.border = "1px solid hsl(0, 36%, 70%)"
    }else {
        console.log("invalid")
        document.getElementById("result").style.display = "inline"
        document.getElementById("errorIcon").style.display = "inline"
        document.getElementById("email-input").style.border = "2px solid hsl(0, 93%, 68%)"
    }
}