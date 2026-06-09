// Mobile Menu Toggle
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
menuIcon.classList.toggle("bx-x");
navbar.classList.toggle("active");
});

// Close Menu When Scrolling
window.addEventListener("scroll", () => {
menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");
});

// Close Menu When Clicking Navigation Links
document.querySelectorAll(".navbar a").forEach(link => {
link.addEventListener("click", () => {
menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");
});
});

// Typed.js Animation
const typed = new Typed(".multiple-text", {
strings: [
"Frontend Developer",
"Backend Developer",
"Full Stack Developer",
"Problem Solver"
],
typeSpeed: 80,
backSpeed: 60,
backDelay: 1200,
loop: true
});
