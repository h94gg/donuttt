const hidminu =document.querySelector('.hidminu')
const show =document.querySelector('.show')
const hide =document.querySelector('.hide')

show.addEventListener('click',()=>(
    hidminu.classList.add('active'),
    show.style.display='none',
    hide.style.display='block'
));
hide.addEventListener('click',()=>(
    hidminu.classList.remove('active'),
    show.style.display='block',
    hide.style.display='none'
));