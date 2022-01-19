const shareBtn = document.querySelector('#shareBtn');
const overlay = document.querySelector('.overlay');
const shareModel =document.querySelector('.share');
const title = window.document.title;
const url = window.document.href;

shareBtn.addEventListener('click', ()=>{
    if(navigator.share){
        navigator.share({
            title : `${title}`,
            url : `${url}` 
        }) .then(()=>{
            console.log(`Thanks for sharing!`);
        })
        console.log(console.error);
    }else{
        overlay.classList.add('show-share');
        shareModel.classList.add('show-share');
    }
})
overlay.addEventListener('click', ()=>{
    overlay.classList.remove('show-share');
    shareModel.classList.remove('show-share');
});

