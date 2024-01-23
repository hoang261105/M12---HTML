const editButtons = document.querySelectorAll('.edit-button');
const userNames = document.querySelectorAll('.name');

const editInput = document.getElementById("input");
const editButton = document.getElementById("button");

let selectName = '';
editButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        selectName = userNames[index].textContent.trim();
        input.value = selectName;
    });
});

button.addEventListener('click', function(){
    var inputValue = input.value;
    userNames.forEach((name) => {
        if(name.textContent.trim() === selectName){
            name.textContent = inputValue;
        }
    });
    input.value = ' ';
    selectName = ' ';
});