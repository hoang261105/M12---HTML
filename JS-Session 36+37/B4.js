const myInput1 = document.getElementById("input1");
const myInput2 = document.getElementById("input2");
const myOutput = document.getElementById("output");
const myButton = document.getElementById("button");

myButton.addEventListener('click', function(){
    var num1 = parseInt(myInput1.value); // Chuyển đổi giá trị nhập vào thành số nguyên
    var num2 = parseInt(myInput2.value); // Chuyển đổi giá trị nhập vào thành số nguyên
    var total = num1 + num2;
    myOutput.value = total; // Gán giá trị tổng vào ô thứ ba
});