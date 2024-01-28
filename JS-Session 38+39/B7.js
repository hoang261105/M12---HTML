let inputNumber = document.getElementById("number");
let passBox = document.getElementById("myInput");
let upperCase = document.getElementById("uppercase");
let lowerCase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let myBtn = document.getElementById("genBtn");
myBtn.addEventListener('click', function(){
    passBox.value = generatePassword();
});

function generatePassword(){
    let genPass = "";
    genPass = Math.random() * 10;
    return genPass;
}