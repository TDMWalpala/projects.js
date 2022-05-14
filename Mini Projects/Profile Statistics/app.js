const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl =>{
    counterEl.innerText = "0";
    incrementCounter();

    function incrementCounter(){
       let currentCounter = +counterEl.innerText;
       const dataCeil  = counterEl.getAttribute("data-ceil");

    //    console.log(dataCeil);
       const increment = dataCeil / 15;
       currentCounter =  Math.floor(currentCounter + increment);
       counterEl.innerText = currentCounter;

       if(currentCounter < dataCeil){

           counterEl.innerText = currentCounter;
           setTimeout(incrementCounter, 80);
       }else{
           counterEl.innerText = dataCeil;
       }

    }
});