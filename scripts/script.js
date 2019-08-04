/* ==============================================
    Collapsible navigation menu for mobile
============================================== */

function toggleNavMenu() {
    var navButton = document.getElementById("nav-btn");
    var navMenu = document.getElementsByClassName("nav-menu");

    var closeMenu = function() {
        if (event.target.closest(".nav-menu")) {
            return;
        } else {
            navMenu[0].classList.remove("active");
            document.removeEventListener("click", closeMenu, false);
        };
    };

    var openMenu = function() {
        navMenu[0].classList.add("active");
        event.stopPropagation();
        document.addEventListener("click", closeMenu, false);
    };

    navButton.addEventListener("click", openMenu, false);
};

toggleNavMenu();