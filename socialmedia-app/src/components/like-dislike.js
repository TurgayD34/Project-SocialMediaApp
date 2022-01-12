const likebtn = document.querySelector('#likeBtn');
const dislikebtn = document.querySelector('#dislikeBtn');
const likeInput = document.querySelector('#likeInput');
const dislikeInput = document.querySelector('#dislikeInput');
likeInput.value = 0;
dislikeInput.value = 0;

// Like btn function
likebtn.addEventListener('click', () => {
    likeInput.value = parseInt(likeInput.value) + 1;
    likeInput.style.color = "blue";
});

// Dislike btn function
dislikebtn.addEventListener('click', () => { 
    dislikeInput.value = parseInt(dislikeInput.value) + 1;
    dislikeInput.style.color = "red";
});