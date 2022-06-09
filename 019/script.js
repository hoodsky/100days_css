let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');
let dot3 = document.querySelector('.dot3');
let dotActive = document.querySelector('.dot-active');
let background = document.querySelector('.background')
console.log(background);

dot1.addEventListener('click', () => {
    background.style.transform = `translateX(0px)`;
    dotActive.style.transform = `translateX(-47px)`;
})

dot2.addEventListener('click', () => {
    background.style.transform = `translateX(-400px)`;
    dotActive.style.transform = `translateX(0px)`;
})

dot3.addEventListener('click', () => {
    background.style.transform = `translateX(-800px)`;
    dotActive.style.transform = `translateX(47px)`;
})