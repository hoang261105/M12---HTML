var num = prompt("Nhập số");

var result = 1;
if(num<0){
    console.log("Không hợp lệ");
}else{
    for(let i=1; i<=num; i++){
        result *= i;
    }
    console.log(result);
}

