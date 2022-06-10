function flip(event) {
    var element = event.currentTarget;
    if (element.className === "card") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        }
        else {
            element.style.transform = "rotateY(180deg)";
        }
    }
};

function SignUp() {
    var email = document.getElementById('email').value;
    document.getElementById("signup-msg").innerHTML = "Thanks for signing up. Details have been sent to " + email+ ".";
}