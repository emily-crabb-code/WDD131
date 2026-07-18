const images = [
    "images/pexels-anntarazevich-8392550.jpg",
    "images/pexels-googledeepmind-25626515.jpg",
    "images/pexels-worldsikhorg-14797923.jpg"
];

let currentImage = 0;

const heroImage = document.querySelector("#heroImg")

function nextImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    heroImage.src = images[currentImage];
}

setInterval(nextImage, 5000);



let menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", handleMenuButtonClick)

function handleMenuButtonClick(event) {
    console.log(event);

    let nav = document.querySelector("nav");

    nav.classList.toggle("open");

    menuButton.classList.toggle("change");
    
}




const articles = [
    {
        imgSrc: "images/pexels-diva-30158162.jpg",
        imgAlt:  "Bacteria growths",
        title: "Brain-Eating Amoeba aren't as dangerous as you may think"
    },

    {
        imgSrc: "images/pexels-worldsikhorg-14797923.jpg",
        imgAlt: "Not sure",
        title: "Who Knows at this point?"
    }
]

const articleList = document.querySelector(".small-articles");
    
articles.forEach(article => {

        const articleCard = document.createElement("article");
        articleCard.classList.add("article");

        articleCard.innerHTML = `
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <div class="small-text">
                <p>${article.title}</p>
                <button>Read More</button>
            </div>
        `

        articleList.appendChild(articleCard);

    
});

