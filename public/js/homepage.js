//1)Меню-баннер

let infoLinks  = document.querySelectorAll('.info-nav-link');
let allInfoParts = document.querySelectorAll('.info-part');

infoLinks.forEach(item=>item.addEventListener('click',function (){
    let selector = '#'+this.dataset.target;
    console.log(selector);
    let activePart = document.querySelector(selector);
    allInfoParts.forEach(item=>item.classList.remove('info-part-active'));
    activePart.classList.add('info-part-active');
}));

//2)Модальное меню
let menuToggler = document.querySelector('.side-menu');
let modalMenu = document.querySelector('.modal-menu');

menuToggler.addEventListener('click',function(){
   modalMenu.classList.toggle('modal-menu-active');
});

modalMenu.addEventListener('click',function (e){
    if(e.target.tagName != "A"){
        modalMenu.classList.remove('modal-menu-active');
    }
});