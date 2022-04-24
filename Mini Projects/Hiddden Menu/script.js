const btn = document.getElementById('Btn');
const nav = document.getElementById('nav');

btn.addEventListener('click',()=>{
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});