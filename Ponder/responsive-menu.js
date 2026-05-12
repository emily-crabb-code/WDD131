let menuButton = document.querySelector(".menu-btn");


// event listener

menuButton.addEventListener("click", handleMenuButtonClick)

function handleMenuButtonClick(event) {
    console.log(event);

    // toggle on/of the menu display
    let nav = document.querySelector("nav");

    nav.classList.toggle("hide");

    menuButton.classList.toggle("change");
    
}