let num = +prompt('Nhập 1 số bất kỳ');

if(num%2==0 && num>0){
    console.log("Chẵn");
}else if(num%2!=0 && num>0){
    console.log("Lẻ");
} else{
    console.log("Giá trị không hợp lệ")
}