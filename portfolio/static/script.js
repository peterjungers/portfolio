const hamburgerIcon = document.querySelector("#hamburger-icon");
const xIcon = document.querySelector("#x-icon");
const navMenu = document.querySelector("#nav-menu");
const background = document.querySelector("#container-main");


function openNavMenu(event) {
    const mediaQuery = window.matchMedia("(max-width: 450px");
    if (mediaQuery.matches) {
        navMenu.style.width = "100vw";
    }

    event.stopPropagation();
    navMenu.style.right = "0px";
    navMenu.style.transition = ".5s";
    background.style.opacity = ".4";

    background.addEventListener("click", backgroundClick);
}


/*
Closes navMenu upon click of background outside of navMenu
(This article was extremely helpful in getting this to work:
https://codeburst.io/the-off-click-7cbc08bb3df5):
*/
function backgroundClick() {
    navMenu.style.right = "-375px";
    navMenu.style.transition = ".3s";
    background.style.opacity = "1";

    background.removeEventListener("click", backgroundClick);
}


// Called from xIcon event listener:
function closeNavMenu() {
    navMenu.style.width = "375px";
    navMenu.style.right = "-375px";
    navMenu.style.transition = ".3s";
    background.style.opacity = "1";

    background.removeEventListener("click", backgroundClick);
}


/*
Closes navMenu if anchor tag id link is clicked,
which is important for anchor tag id linking within current page:
*/
function closeOnNavLinkClick() {
    const navLinks = document.querySelectorAll("nav a[href*='#']");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.style.right === "0px") {
                navMenu.style.right = "-375px";
                navMenu.style.transition = "0s";
                background.style.opacity = "1";

                background.removeEventListener("click", backgroundClick);
            }
        });
    });
}


/*
Important for when navMenu is opened on one mobile viewport
orientation, then viewport orientation changes with navMenu
still open:
*/
function setNavMenuSize() {
    if (window.innerWidth > 450 && window.innerWidth <= 1050) {
        navMenu.style.width = "375px";
    } else if (window.innerWidth <= 450) {
        navMenu.style.width = "100vw";
    } else if (window.innerWidth > 1050) {
        // Allows navMenu width to stretch again when window resized
        navMenu.style.width = null;
    }
}


/*
Important if navMenu left open before window resize
or mobile viewport change in orientation:
 */
function resetBackgroundOpacityOnResize(event) {
    if (event) {
        background.style.opacity = "1";
    }
}


/*
Important if navMenu left open before window resize
or mobile viewport change in orientation:
 */
function closeNavMenuOnResize(event) {
    if (event) {
        if (window.innerWidth <= 450) {
            navMenu.style.right = "-100vw";
        } else {
            navMenu.style.right = "-375px";
        }
        navMenu.style.transition = "0s";
    }
}


hamburgerIcon.addEventListener("click", openNavMenu);
xIcon.addEventListener("click", closeNavMenu);
document.addEventListener("DOMContentLoaded", closeOnNavLinkClick);
window.addEventListener("resize", setNavMenuSize);
window.addEventListener("resize", resetBackgroundOpacityOnResize);
window.addEventListener("resize", closeNavMenuOnResize);
