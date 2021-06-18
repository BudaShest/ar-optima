/*Файл со скриптами для админ-панели*/
//1)Боковое меню
const adminToggler = document.querySelector('.admin-toggler');
const adminModal = document.querySelector('.admin-modal');
const adminModalCloseBtn = document.querySelector('.admin-modal-close-btn');

adminToggler.addEventListener('click', function (){
   adminModal.classList.toggle('admin-modal-active');
});

adminModalCloseBtn.addEventListener('click', function (){
    adminModal.classList.remove('admin-modal-active');
});

//2)Навигация по секциям
let navLinks = document.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('section')

navLinks.forEach(item=>item.addEventListener('click',function (){
    let selector = '#' + this.dataset.target;
    console.log(selector);
    let activeSection = document.querySelector(selector);
    sections.forEach(item=>item.classList.remove('section-active'));
    activeSection.classList.add('section-active');
    adminModal.classList.remove('admin-modal-active');
}));

//3)Навигация при загрузки страницы
let linkTargets = [...navLinks].map(item=>item.dataset.target);

window.onload = function (){
    let currentUrl = new URL(window.location.href);
    let currentHash = currentUrl.hash.slice(1);

    if(linkTargets.includes(currentHash)){
        let selector = "#" + currentHash;
        let section = document.querySelector(selector);
        sections.forEach(item=>item.classList.remove('section-active'));
        section.classList.add('section-active');
    }
}

