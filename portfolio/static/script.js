function openNavMenu() {
    const hamburgerIcon = document.querySelector("#hamburger-icon");
    const navMenu = document.querySelector("#nav-menu");
    const body = document.querySelector("body");
    background = document.querySelector("#container-main");

    const mediaQuery = window.matchMedia("(max-height: 450px");

    hamburgerIcon.addEventListener("click", () => {


        if (navMenu.style.right !== "0px") {
            if (mediaQuery.matches) {
                console.log("hi");
                // hamburgerIcon.style.position = "relative";
                // body.style.overflow = "hidden";
                // hamburgerIcon.style.backgroundColor = "red";
                // } else {
                navMenu.style.width = "400px";
                // window.scroll(0, 0);
                // navMenu.style.right = "50vw";
            }
                // } else {
                navMenu.style.right = "0";

            hamburgerIcon.style.position = "fixed";

            hamburgerIcon.style.rotate = "-90deg";
            navMenu.style.transition = ".5s";
            // hamburgerIcon.style.right = "5rem";
            // body.style.overflow = "hidden";
            // background.style.backgroundColor = "var(--black)";
            // background.style.opacity = ".4";
        } else {
            hamburgerIcon.style.rotate = "0deg";
            navMenu.style.width = "375px";
            navMenu.style.right = "-375px";
            navMenu.style.transition = ".3s";
            hamburgerIcon.style.position = "absolute";

            // hamburgerIcon.style.right = "0";
            // body.style.overflow = "visible";
            // background.style.opacity = "1";
        }

    });
}


function closeNavMenu() {
    hamburgerIcon = document.querySelector("#hamburger-icon");
    navMenu = document.querySelector("#nav-menu");

    hamburgerIcon.addEventListener("click", () => {
        navMenu.style.width = "0";
    });
}













window.addEventListener("DOMContentLoaded", openNavMenu());
// window.addEventListener("DOMContentLoaded", closeNavMenu());