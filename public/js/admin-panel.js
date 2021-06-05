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

}));

