let changeInputStateBtns = document.querySelectorAll('.change-pencil');

changeInputStateBtns.forEach(item=>item.addEventListener('click',function (){
    this.classList.toggle('change-pencil-active');
    let selector = "#" + this.dataset.target;
    let inputActive = document.querySelector(selector);
    if(inputActive.hasAttribute('readonly')){
        inputActive.removeAttribute('readonly');
    }else{
        inputActive.setAttribute('readonly','true');
    }
}));