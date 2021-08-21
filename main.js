const total = document.getElementById("total")
const ram8 = document.getElementById("memoryFirst");
const ram16 = document.getElementById("memorySecond");
const ram16InnerTxt = document.getElementById("ram16");

ram8.addEventListener("click", function(){
    ram16InnerTxt.innerText = 0;
    total.innerText = +total.innerText - 180;
});

ram16.addEventListener("click", function(){
    ram16InnerTxt.innerText = 180;
    total.innerText = +total.innerText + +ram16InnerTxt.innerText;
});

const storageFirst = document.getElementById("storageFirst");
const storageSecond = document.getElementById("storageSecond");
const storageThird = document.getElementById("storageThird");
const storageInnerTxt = document.getElementById("storage");

storageFirst.addEventListener("click", function(){
    storageInnerTxt.innerText = 0;
    total.innerText = +total.innerText - 180;
});

storageSecond.addEventListener("click", function(){
    storageInnerTxt.innerText = 100;
    total.innerText = +total.innerText + +ram16InnerTxt.innerText;
});

storageThird.addEventListener("click", function(){
    storageInnerTxt.innerText = 180;
   
});

const dlFirst = document.getElementById("dl-first");
const dlSecond = document.getElementById("dl-second");
const deliveryInnerTxt = document.getElementById("delivery");

dlFirst.addEventListener("click", function(){
    deliveryInnerTxt.innerText = 0;
});

dlSecond.addEventListener("click", function(){
    deliveryInnerTxt.innerText = 20;
});