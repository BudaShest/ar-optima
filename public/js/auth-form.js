//Переключение форм
const regBtnShow = document.querySelector('#reg-btn-show');
const authBtnShow = document.querySelector('#auth-btn-show');
const formContainers = document.querySelectorAll('.form-container');

function changeFormsView(){
    let targetForm = document.querySelector('.'+this.dataset.target);
    formContainers.forEach(item=>item.classList.remove('form-container-active'));
    console.log(targetForm);
    targetForm.classList.add('form-container-active');
}

regBtnShow.onclick = changeFormsView;
authBtnShow.onclick = changeFormsView;

//Передача хэша через url
window.onload = function(){
    let url = new URL(window.location.href);
    if(url.hash){
        formContainers.forEach(item=>item.classList.remove('form-container-active'));
        let activeForm = document.querySelector(url.hash);
        console.log(activeForm);
        activeForm.classList.add('form-container-active');
    }
}

const secretWord = 'access';
let checkWord = '';
window.onkeypress = function (e){

    checkWord += e.key;
    if(checkWord === secretWord){
        document.location.href = "/admin-auth";
    }
}