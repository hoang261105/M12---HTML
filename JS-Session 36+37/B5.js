let myButton = document.getElementById("button");
let myList = document.getElementById("list");
let input = document.getElementById("input");

myButton.addEventListener('click', function(){
    var inputValue = input.value;
    if(inputValue !== ""){
        var newLi = document.createElement("li");
        newLi.textContent = inputValue;
        myList.appendChild(newLi);
        input.value = "";
    }
});

input.addEventListener('input', function(){
    if(input.value.length > 0){
        input.classList.add('has-content');
    }else{
        input.classList.remove('has-content');
    }
})