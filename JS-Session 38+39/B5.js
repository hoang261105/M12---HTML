const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const num3 = document.getElementById("number3");

let currentNum = 0;
const targetNumber1 = 120000;
const duration = 3000;

const increment1 = targetNumber1 / (duration / 100);
const interval1 = setInterval(() => {
    currentNum += increment1;
    
    if(currentNum >= targetNumber1){
        currentNum = targetNumber1;
        clearInterval(interval1);
    }
    
    num1.innerHTML = currentNum.toFixed(0);
}, 100);

const targetNumber2 = 500000;
const increment2 = targetNumber2 / (duration / 100);

const interval2 = setInterval(() => {
    currentNum += increment2;
    if(currentNum >= targetNumber2){
        currentNum = targetNumber2;
        clearInterval(interval2);
    }
    num2.innerHTML = currentNum.toFixed(0);
}, 100);

const targetNumber3 = 1000000;
const increment3 = targetNumber3 / (duration / 100);

const interval3 = setInterval(() => {
    currentNum += increment3;
    if(currentNum >= targetNumber3){
        currentNum = targetNumber3;
        clearInterval(interval3);
    }
    num3.innerHTML = currentNum.toFixed(0);
}, 100);
