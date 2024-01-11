let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let c = +prompt("Nhập c");

var max = a;
var min = a;

if(max<b){
    max = b;
}
if(max<c){
    max = c;
}
if(min>b){
    min = b;
}

if(min>c){
    min = c;
}

console.log("Số lớn nhất là:" +max);
console.log("Số nhỏ nhất là:" +min);