document.getElementById("rollButton").addEventListener("click", event => {
    
    const images = document.querySelectorAll("#gameboard img");
    //change the src
    images.forEach(image => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });


    //timer
    setTimeout(() =>{
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1) + ".gif";
            }
        });
    }, 2500);
});

function isDieUnlocked(dieImage) {
    //retrieve list of checkboxes
    const checkboxes = document.querySelectorAll("#gameboard input");
    //filter out checked
    const unchecked = Array.from(checkboxes)
                            .filter(checkbox => !checkbox.checked);
    //compare list to dieImage, if there's a match, return true
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}