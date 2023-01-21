function openNavMenu() {
    const hamburgerIcon = document.querySelector("#hamburger-icon");
    const navMenu = document.querySelector("#nav-menu");
    // const body = document.querySelector("body");
    background = document.querySelector("#container-main");

    const mediaQuery = window.matchMedia("(max-width: 450px");

    hamburgerIcon.addEventListener("click", () => {
        if (navMenu.style.right !== "0px") {
            if (mediaQuery.matches) {
                navMenu.style.width = "100vw";
            }
            navMenu.style.right = "0px";
            navMenu.style.transition = ".5s";
            // background.style.opacity = ".4";
        }
    });

    // window.addEventListener("click", (e) => {
    //     if (e.target.contains(navMenu)) {
    //         navMenu.style.width = "375px";
    //         navMenu.style.right = "-375px";
    //         navMenu.style.transition = ".3s";
    //     }
    // });
}


function closeNavMenu() {
    const xIcon = document.querySelector("#x-icon");
    const navMenu = document.querySelector("#nav-menu");
    const navLinks = document.querySelectorAll("nav a");
    const background = document.querySelector("#container-main")

    navMenu.addEventListener("click", () => {
        navLinks.forEach(link => {
            if (navMenu.style.right === "0px") {
                navMenu.style.width = "375px";
                navMenu.style.right = "-375px";
                navMenu.style.transition = "0s";
                // background.style.opacity = "1";
            }
         })

    })

    xIcon.addEventListener("click", () => {
        if (navMenu.style.right === "0px") {
            navMenu.style.width = "375px";
            navMenu.style.right = "-375px";
            navMenu.style.transition = ".3s";
            // background.style.opacity = "1";
        }
    });

    // background.addEventListener("click", () => {
    //     if (navMenu.style.right === "0px") {
    //         navMenu.style.width = "375px";
    //         // navMenu.style.right = "-375px";
    //         console.log("hi")
    //         navMenu.style.transition = ".3s";
    //     }
    // });


    // document.addEventListener("click", (e) => {
    //     console.log(e.target);
    //     if (e.currentTarget.id === "xIcon") {
    //         console.log("hi");
    //         // if (navMenu.style.right === "0px") {
    //             navMenu.style.width = "375px";
    //             navMenu.style.right = "-375px";
    //             navMenu.style.transition = ".3s";
    //         // }
    //     }
    // });



}





function test() {
    const navMenu = document.querySelector("#nav-menu");

    if (navMenu.style.right !== "0px") {


        window.addEventListener("click", (e) => {
            console.log(navMenu.style.right);

            console.log(e.target);
            if (!document.contains(navMenu)) {
                console.log(e.target);
                navMenu.style.width = "375px";
                navMenu.style.right = "-375px";
                navMenu.style.transition = ".3s";
            }
        });
    }
}


// (e.target.id !== "xIcon" || e.target.id === "navMenu")





//         if (navMenu.style.right !== "0px") {
//             if (mediaQuery.matches) {
//                 console.log("hi");
//                 // hamburgerIcon.style.position = "relative";
//                 // body.style.overflow = "hidden";
//                 // hamburgerIcon.style.backgroundColor = "red";
//                 // } else {
//                 navMenu.style.width = "400px";
//                 // window.scroll(0, 0);
//                 // navMenu.style.right = "50vw";
//             }
//                 // } else {
//                 navMenu.style.right = "0";
//
//             // hamburgerIcon.style.position = "fixed";
//
//             // hamburgerIcon.style.rotate = "-90deg";
//             navMenu.style.transition = ".5s";
//             // hamburgerIcon.style.right = "5rem";
//             // body.style.overflow = "hidden";
//             // background.style.backgroundColor = "var(--black)";
//             // background.style.opacity = ".4";
//         } else {
//             // hamburgerIcon.style.rotate = "0deg";
//             navMenu.style.width = "375px";
//             navMenu.style.right = "-375px";
//             navMenu.style.transition = ".3s";
//             // hamburgerIcon.style.position = "absolute";
//
//             // hamburgerIcon.style.right = "0";
//             // body.style.overflow = "visible";
//             // background.style.opacity = "1";
//         }
//
//     });
// }

// function resetOpacity() {
//     const mediaQuery = window.matchMedia("(min-width: 950px");
//     const background = document.querySelector("#container-main");
//
//     window.addEventListener("resize", () => {
//         if (window.innerWidth === "950px") {
//             if (background.style.opacity === ".4") {
//                 console.log("hi");
//                 background.style.opacity = "1";
//             }
//         }
//     })
//
// }






window.addEventListener("DOMContentLoaded", openNavMenu());
window.addEventListener("DOMContentLoaded", closeNavMenu());
// window.addEventListener("DOMContentLoaded", resetOpacity());