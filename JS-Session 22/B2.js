let a = +prompt("Nhập số a");
let b = +prompt("Nhập số b");
let c = +prompt("Nhập số c");

if(a+b>c && a+c>b && b+c>a){
    console.log("3 cạnh tạo thành 1 tam giác");
}else{
    console.log("3 cạnh không tạo thành 1 tam giác");
}