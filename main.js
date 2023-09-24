let knopka = document.querySelector('.btn');
let karobka = document.querySelector('.box');

knopka.addEventListener('click', function(){
    karobka.classList.toggle('new')
    knopka.classList.toggle('k')     
});

