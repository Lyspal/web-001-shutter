// author: Sylvain Laporte
// program: menu.js
// date: 2019-08-08
// object: Implements menus for desktop and mobile.
// reference: https://cssanimation.rocks/scroll-animations/


// Condition for displaying desktop/mobile menu
let mediaQuery = "(max-width: 989px)";


/* ==================================================
    Functions for toggling sub menus
================================================== */ 

/**
 * Handler for toggling sub menus.
 * @function toggleSubMenu
 */
function toggleSubMenu() {
    this.nextElementSibling.classList.toggle("active");
};

/**
 * Toggle sub menus.
 * @function expandSubMenu
 * @param {bool} action - Trigger adding and removing event listeners.
 */
function expandSubMenu(action) {
    let elementsWithSubMenu = document.getElementsByClassName("with-sub-menu");

    if (action) {
        for (var i = 0; i < elementsWithSubMenu.length; i++) {
            elementsWithSubMenu[i].addEventListener("click", toggleSubMenu);
        };
    } else {
        // SOLVED listener not removing. Because new var toggleSubMenu when double calling expandSubMenu.
        for (var j = 0; j < elementsWithSubMenu.length; j++) {
            elementsWithSubMenu[j].removeEventListener("click", toggleSubMenu);
        };
    };
};

/* ==============================================
    Collapsible navigation menu for mobile
============================================== */

/**
 * Toggle main navigation menu by clicking the menu button.
 * @function toggleNavMenu
 */
function toggleNavMenu() {
    let navButton = document.getElementById("nav-btn");
    let navMenu = document.getElementsByClassName("nav-menu");
    let allButNav = document.querySelectorAll(":not(.nav-menu)");

    /**
     * Handler for opening main menu.
     * @function openMenu
     */
    const openMenu = function() {
        navMenu[0].classList.add("active");
        event.stopPropagation();
        allButNav.forEach(function(currentValue) {
            currentValue.addEventListener("touchstart", closeMenu);
            currentValue.addEventListener("click", closeMenu);
        });
        navButton.removeEventListener("click", openMenu);
        expandSubMenu(true);
    };

    /**
     * Handler for closing main menu.
     * @function closeMenuà
     */
    const closeMenu = function(event) {
        event.preventDefault();
        if (event.target.closest(".nav-menu")) {
            return;
        } else {
            navMenu[0].classList.remove("active");
            allButNav.forEach(function(currentValue) {
                currentValue.removeEventListener("touchstart", closeMenu);
                currentValue.removeEventListener("click", closeMenu);
            });
            navButton.addEventListener("click", openMenu);
            expandSubMenu(false);
        };
    };

    navButton.addEventListener("click", openMenu);
};


/* ==============================================
    Handling media queries
============================================== */

// Create a MediaQueryList object with a width condition.
let mql = window.matchMedia(mediaQuery);

/**
 * Handler for the media change.
 * @function handleMediaChange
 * @param (object) - A MediaQueryList object.
 */
var handleMediaChange = function(mediaQueryList) {
    // console.log(mql);
    if (mediaQueryList.matches) {
        toggleNavMenu();
        // console.log("Matches");
    } else {
        expandSubMenu(true);
        // console.log("Doesn't match");
    }
}

// Run a first handleMediaChange on load.
handleMediaChange(mql);

// Add an event listener to the mql object for subsequent changes.
mql.addListener(handleMediaChange);




