const burgerManager = () => {

    // console.dir("Atchoooo !");

    const burger = document.querySelector("#burger");
    const icon = document.querySelector("#icon");
    const navMenu = document.querySelector("#navMenu");
    const user = document.querySelector("#logger");
    let displayMenu = false;

    burger.addEventListener("click", () => {

        displayMenu = !displayMenu;
        if (displayMenu) { // if (displayMenu) = if (displayMenu === true)
            icon.classList.remove("fa-caret-down");
            icon.classList.add("fa-caret-up");
            navMenu.classList.toggle("rightSlide");
            navMenu.classList.toggle("leftSlide");
            user.classList.toggle("rightSlide");
            user.classList.toggle("leftSlide");
            // navMenu.style.display = "flex";
            // navMenu.style.flexDirection = "column";
            // user.style.display = "block";
        }

        else {
            icon.classList.remove("fa-caret-up");
            icon.classList.add("fa-caret-down");
            navMenu.classList.toggle("rightSlide");
            navMenu.classList.toggle("leftSlide");
            user.classList.toggle("rightSlide");
            user.classList.toggle("leftSlide");
            // navMenu.style.display = "none";
            // user.style.display = "none";
        }

    })
}

export { burgerManager };