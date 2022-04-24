const carouselSlide = document.querySelector('.carousel__slide');
const carouselImage= document.querySelectorAll('.carousel__slide img');
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;

const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translate('+(-size*counter)+'px)';

nextBtn.addEventListener('click',()=>{
    if(counter>=carouselImage.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    // console.log(counter);
    carouselSlide.style.transform = 'translate('+(-size*counter)+'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    // console.log(counter);
    carouselSlide.style.transform = 'translate('+(-size*counter)+'px)';
});

carouselSlide.addEventListener('transitionend',()=>{
    // console.log(carouselImage[counter]);
    if(carouselImage[counter].id ==="lastclone"){
        carouselSlide.style.transform="none";
        // console.log("none");
        counter = carouselImage.length-2;
        carouselSlide.style.transform = 'translate('+(-size*counter)+'px)';
    }

    if(carouselImage[counter].id ==="firstclone"){
        carouselSlide.style.transform="none";
        counter = carouselImage.length-counter;
        carouselSlide.style.transform = 'translate('+(-size*counter)+'px)';
    }
});