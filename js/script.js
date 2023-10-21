const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const close = document.getElementById('close');

if(nav){
    bar.addEventListener('click', function(){
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', function(){
        nav.classList.remove('active');
    })
}