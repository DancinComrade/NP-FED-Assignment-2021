// JavaScript source code

// Scroll to Top when Reload
$(document).ready(function () {
    $(this).scrollTop(0);
});

// Get viewport
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

// Only animate when viewport width is above 700px
if (vw > 700) {

    // Animate when in viewport
    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

    // Attach observer to every animate-text element:
    const ELs_inViewport = document.querySelectorAll('.animate-text');
    ELs_inViewport.forEach(EL => {
        Obs.observe(EL, obsOptions);
    });
}

// Captcha
const captchaTxt = document.getElementById("cap-text") // captcha text
const reloadBtn = document.getElementById("cap-but") // captcha reload button
const inputField = document.getElementById("cap-inp") // captcha input box
const paypalBtn = document.getElementById("paypal") // Paypal button
const monBtn = document.getElementById("monero") // Monero button

const popupTitle = document.getElementById("pop-title")
const popupPara = document.getElementById("pop-para")
const popupClose = document.getElementById("pop-close")

// store all alphanumerical characters in array
let charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha() {
    for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
        let randomCharacter = charArray[Math.floor(Math.random() * charArray.length)];
        captchaTxt.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText with a whitespace
    }
}

getCaptcha(); //calling getCaptcha when the page open
// call getCaptcha & removeContent when reload button is clicked

function removeContent() {
    inputField.value = "";
    captchaTxt.innerText = "";
}

reloadBtn.addEventListener("click", () => {
    removeContent();
    getCaptcha();
});

// Paypal Button
paypalBtn.addEventListener("click", e => {
    e.preventDefault(); // prevent button from executing default behaviour

    // add space after user inputs each character
    let inputVal = inputField.value.split('').join(' ');
    if (inputVal != captchaTxt.innerText) { //if captcha doesn't matched

        // Edit popup
        popupTitle.style.color = "#FF0000";
        popupTitle.style.marginTop = "35px";
        popupTitle.innerText = "Error";
        popupPara.innerText = "Captcha Invalid. Please Try Again.";

        removeContent();
        getCaptcha();
    } else {
        
        popupTitle.style.color = "#000000";
        popupTitle.style.marginTop = "10px";
        popupTitle.innerText = "Donation Success";
        popupPara.innerText = "Thank you for your kind donation.";

        removeContent();
        getCaptcha();
    }
});

// Monero Button
monBtn.addEventListener("click", e => {
    e.preventDefault(); // prevent button from executing default behaviour

    // add space after user inputs each character
    let inputVal = inputField.value.split('').join(' ');
    if (inputVal != captchaTxt.innerText) { //if captcha doesn't matched
        popupTitle.style.color = "#FF0000";
        popupTitle.style.marginTop = "35px";
        popupTitle.innerText = "Error";
        popupPara.innerText = "Captcha Invalid. Please Try Again.";

        removeContent();
        getCaptcha();
    } else {
        popupTitle.style.color = "#000000";
        popupTitle.style.marginTop = "10px";
        popupTitle.innerText = "Donation Success";
        popupPara.innerText = "Thank you for your kind donation.";

        removeContent();
        getCaptcha();
    }
});

// Popup
function togglePopup() {
    document.getElementById("donate-popup").classList.toggle("active");
}

// Keep buttons active
// Get the container element
var btnContainer = document.getElementById("donate-amt");

// Get all buttons with class="donate-but" inside the container
var donateBut = btnContainer.getElementsByClassName("donate-but");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < donateBut.length; i++) {
    donateBut[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Responsive Navigation Bar
const navHamburger = document.getElementsByClassName("nav-hamburger")[0]
const navbarLinks = document.getElementsByClassName("nav-links")[0]

navHamburger.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})