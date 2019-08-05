/* ==============================================
    Collapsible navigation menu for mobile
============================================== */

/**
 * Toggle main navigation menu by clicking the menu button.
 * @function toggleNavMenu
 */
function toggleNavMenu() {
    var navButton = document.getElementById("nav-btn");
    var navMenu = document.getElementsByClassName("nav-menu");

    /* ==================================================
        Functions for toggling sub menus
    ================================================== */ 

    /**
     * Handler for toggling sub menus.
     * @function toggleSubMenu
     */
    var toggleSubMenu = function() {
        this.nextElementSibling.classList.toggle("active");
    };

    /**
     * Toggle sub menus.
     * @function expandSubMenu
     * @param {bool} action - Trigger adding and removing event listeners.
     */
    var expandSubMenu = function(action) {
        var elementsWithSubMenu = document.getElementsByClassName("with-sub-menu");
    
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

    // ==================================================

    /**
     * Handler for opening main menu.
     * @function openMenu
     */
    var openMenu = function() {
        navMenu[0].classList.add("active");
        event.stopPropagation();
        document.addEventListener("click", closeMenu, false);
        navButton.removeEventListener("click", openMenu, false);
        expandSubMenu(true);
    };

    /**
     * Handler for closing main menu.
     * @function closeMenuà
     */
    var closeMenu = function() {
        if (event.target.closest(".nav-menu")) {
            return;
        } else {
            navMenu[0].classList.remove("active");
            document.removeEventListener("click", closeMenu, false);
            navButton.addEventListener("click", openMenu, false);
            expandSubMenu(false);
        };
    };

    navButton.addEventListener("click", openMenu, false);
};

toggleNavMenu();
