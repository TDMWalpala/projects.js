const footer = document.getElementById('footer');
// console.log(footer);
function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow=>{
        arrow.addEventListener('click',()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            console.log(nextForm);
            if(input.type==="text" && validateUser(input)){
                // console.log("everything okay");
                nextSlide(parent,nextForm);
            }else if(input.type === 'email' && validateEmail(input)){
                nextSlide(parent,nextForm);
            }else if(input.type === 'password' && validatePassword(input)){
                nextSlide(parent,nextForm);
            }else{
                parent.style.animation = "shake 0.5s ease";
            }
            parent.addEventListener('animationend',()=>{
                parent.style.animation = "";
            })
        });
    });
}

function validatePassword(input){
    const validation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(input.value.match(validation)) { 
        error("rgb(87, 189,130)","rgb(55, 163, 105)");
       return true;
    }else{
        error("rgb(187,78,87)","rgb(185, 66, 76)");
    }
}

function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function validateUser(user){
    if(user.value.length<6){
        console.log("not enough characters");
        error("rgb(187,78,87)","rgb(185, 66, 76)");
    }else{
        error("rgb(87, 189,130)","rgb(55, 163, 105)");
        return true;
    }
}
function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error("rgb(87, 189,130)","rgb(55, 163, 105)");
        return true;
    }else{
        error("rgb(187,78,87)","rgb(185, 66, 76)");
    }
}

function error(color1,color2){
    document.body.style.backgroundColor = color1;
    footer.style.backgroundColor = color2;
}

animatedForm();