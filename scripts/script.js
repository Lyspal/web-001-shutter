/* ==============================================
    Collapsible navigation menu for mobile
============================================== */

var navButton = document.getElementById("nav-btn");
var navMenu = document.getElementsByClassName("nav-menu");

// Show the menu when nav-btn clicked.
navButton.addEventListener("click", function(event) {
    navMenu[0].classList.add("active");
    event.stopPropagation();
    // Hide the menu when clicking outside of it.
    document.addEventListener("click", function(event) {
        if (event.target.closest(".nav-menu")) {
            return;
        } else {
            navMenu[0].classList.remove("active");
        };
    });
});
