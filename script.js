const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.getElementById("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click",(e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin:"bottom",
    duration: 1000,
};

scrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
scrollReveal().reveal(".content h2", {
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

scrollReveal().reveal(".order_card", {
    ...scrollRevealOption,
    interval: 500,
});

scrollReveal().reveal(".event_content", {
   duration:1000,
});