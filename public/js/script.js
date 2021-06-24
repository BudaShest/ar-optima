//1)Модальное меню
let menuToggler = document.querySelector('.side-menu .menu-block');
let modalMenu = document.querySelector('.modal-menu');

menuToggler.addEventListener('click',function(){
    modalMenu.classList.toggle('modal-menu-active');
});

modalMenu.addEventListener('click',function (e){
    if(e.target.tagName != "A"){
        modalMenu.classList.remove('modal-menu-active');
    }
});