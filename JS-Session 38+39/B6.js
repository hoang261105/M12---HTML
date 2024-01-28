const litersElement = document.getElementById("liters");
const percentElement = document.getElementById("percent");
const buttons = document.getElementsByClassName("button");
const waterLevelElement = document.querySelector('.water-level');

let litersRemaining = 2;
let totalPercent = 0;
let cupCount = 0;
let percentGlass = 0;

for(let i=0; i< buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        if(!this.hasAttribute('disabled')){
            const glassSize = 0.25; // Glass size in liters

            percentGlass = (glassSize / litersRemaining) * 100;
            totalPercent += percentGlass;
            litersRemaining -= glassSize;
            cupCount++;

            percentElement.textContent = `${totalPercent.toFixed(1)}%`;
            litersElement.textContent = `${litersRemaining.toFixed(2)}L`;

            waterLevelElement.style.height = `${totalPercent += 300/8}px`;

            this.classList.add('clicked');
            this.style.backgroundColor = "white";

            if(totalPercent > 100){
                for(let j=0; j<buttons.length; j++){
                    buttons[j].setAttribute('disabled', 'disabled');
                }
            }
        }
    });
}
