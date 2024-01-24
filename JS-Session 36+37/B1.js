const myButton = document.getElementById("button");

myButton.addEventListener('click', function(){
    var inputValue = input.value;
    if(inputValue.length >10 || inputValue.length === 0){
        alert("Không hợp lệ");
    }else{
        alert("Thành công");
    }
});