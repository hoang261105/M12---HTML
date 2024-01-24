let output = document.getElementById("output");

function display(num){
    output.value += num;
}

function calculate(){ // Bắt lỗi chương trình
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert("Invalid");
    }
}

function Clear(){
    output.value = "";
}
