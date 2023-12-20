const generatememebtn = document.querySelector (
    ".meme .generate-meme-btn" 
);
const memeImage = document.querySelector(".meme img");
const memeTitle = document.querySelector(".meme .meme-title");
const memeAuthor = document.querySelector(".meme .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme Author: ${author}`;  
};

const meme = () => {
    fetch ("https://meme-api.com/gimme/wholesomememes") 
        .then ((response) => response.json())
        .then ((data) => {
            updateDetails(data.url, data.title, data.author);
        });
};
generatememebtn.addEventListener("click", meme)

generatememe();