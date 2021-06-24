//Переключение форм
const regBtnShow = document.querySelector('#reg-btn-show');
const authBtnShow = document.querySelector('#auth-btn-show');
const formContainers = document.querySelectorAll('.form-container');

function changeFormsView(){
    let targetForm = document.querySelector('.'+this.dataset.target);
    formContainers.forEach(item=>item.classList.remove('form-container-active'));
    targetForm.classList.add('form-container-active');
}

regBtnShow.onclick = changeFormsView;
authBtnShow.onclick = changeFormsView;