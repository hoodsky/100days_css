let letter = document.querySelector('.letter');
let airplane = document.querySelector('.airplane');
let send = document.querySelector('.send');
let reset = document.querySelector('.reset')

send.addEventListener('click', () => {
    letter.classList.add('hide');
    airplane.classList.add('show');
    send.classList.add('active');
    reset.classList.add('active');

})