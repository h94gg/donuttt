const hidminu =document.querySelector('.hidminu')
const show =document.querySelector('.show')
const hide =document.querySelector('.hide')
const ddcontainer =document.querySelector('.ddcontainer')
const cccontainer =document.querySelector('.cccontainer')
const hhcontainer =document.querySelector('.hhcontainer')
const d =document.querySelector('.d')
const c =document.querySelector('.c')
const h =document.querySelector('.h')

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

// d.addEventListener('click',()=>(
//     ddcontainer.style.display='block',
//     hhcontainer.style.display='none',
//     cccontainer.style.display='none'
    
// ));

// c.addEventListener('click',()=>(
//     ddcontainer.style.display='none',
//     hhcontainer.style.display='none',
//     cccontainer.style.display='block'
    
// ));

// h.addEventListener('click',()=>(
//     ddcontainer.style.display='none',
//     hhcontainer.style.display='block',
//     cccontainer.style.display='none'
    
// ));


d.addEventListener('click',()=>(
    ddcontainer.classList.add('active'),
    hhcontainer.classList.remove('active'),
    cccontainer.classList.remove('active')
    
    
));

c.addEventListener('click',()=>(
    ddcontainer.classList.remove('active'),
    hhcontainer.classList.remove('active'),
    cccontainer.classList.add('active')
    
));

h.addEventListener('click',()=>(
    ddcontainer.classList.remove('active'),
    hhcontainer.classList.add('active'),
    cccontainer.classList.remove('active')
));
