//Отображение коментариев
let comments = document.querySelectorAll('.comment');

comments.forEach(item=>item.addEventListener('click',function (){
    this.classList.toggle('comment-active');
}))