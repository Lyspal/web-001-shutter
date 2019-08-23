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
            elementsWithSubMenu[i].addEventListener("click", toggleSubMenu, false);
        };
    } else {
        // SOLVED listener not removing. Because new var toggleSubMenu when double calling expandSubMenu.
        for (var j = 0; j < elementsWithSubMenu.length; j++) {
            elementsWithSubMenu[j].removeEventListener("click", toggleSubMenu, false);
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

    /**
     * Handler for opening main menu.
     * @function openMenu
     */
    const openMenu = function() {
        navMenu[0].classList.add("active");
        event.stopPropagation();
        document.addEventListener("click", closeMenu, false);
        document.addEventListener("touchstart", closeMenu, false);
        navButton.removeEventListener("click", openMenu, false);
        expandSubMenu(true);
    };

    /**
     * Handler for closing main menu.
     * @function closeMenuà
     */
    const closeMenu = function() {
        if (event.target.closest(".nav-menu")) {
            return;
        } else {
            navMenu[0].classList.remove("active");
            document.removeEventListener("click", closeMenu, false);
            document.removeEventListener("touchstart", closeMenu, false);
            navButton.addEventListener("click", openMenu, false);
            expandSubMenu(false);
        };
    };

    navButton.addEventListener("click", openMenu, false);
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




