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

