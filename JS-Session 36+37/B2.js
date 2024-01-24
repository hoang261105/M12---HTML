let myButton = document.getElementById("button");
let isOn = false;

myButton.addEventListener('click', function(){
    if(isOn){
        myButton.innerHTML = "OFF";
        isOn = false;
    }else{
        myButton.innerHTML = "ON";
        isOn = true;
    }
});