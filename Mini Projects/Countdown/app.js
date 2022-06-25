var intervalID;

const countdown = () =>{
    const countDate = new Date('june 17, 2022 19:21:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second =1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    console.log(textDay);
    console.log(textHour);
    console.log(textMinute);
    console.log(textSecond);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

    if(gap <= 0){
        window.location.href = "welcome.html";
        stop(); 
    }
};

start();

function start(){
    intervalID = setInterval(countdown,1000);
}
function stop(){
    clearInterval(intervalID);
}