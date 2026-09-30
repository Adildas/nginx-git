// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuBtn.innerHTML = "☰";
    });

});


// ================= BOOKING FORM =================

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    const guests = document.getElementById("guests").value;


    if (!name || !phone || !checkin || !checkout || !guests) {

        formMessage.textContent =
            "Please fill in all required fields.";

        formMessage.style.color = "red";

        return;
    }


    if (checkout <= checkin) {

        formMessage.textContent =
            "Check-out date must be after check-in date.";

        formMessage.style.color = "red";

        return;
    }


    formMessage.textContent =
        "Thank you! Your booking request has been received.";

    formMessage.style.color = "green";


    bookingForm.reset();

});


// ================= DATE VALIDATION =================

const today = new Date().toISOString().split("T")[0];

const checkinInput = document.getElementById("checkin");
const checkoutInput = document.getElementById("checkout");

checkinInput.min = today;
checkoutInput.min = today;


checkinInput.addEventListener("change", function () {

    checkoutInput.min = checkinInput.value;

});


// ================= SCROLL EFFECT =================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(15, 35, 23, 0.98)";
    } else {
        header.style.background = "rgba(20, 45, 31, 0.95)";
    }

});
