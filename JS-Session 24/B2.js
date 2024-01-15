let a = +prompt('Nhập số a');
let b = +prompt('Nhập số b');

let number = [a,b];

let sum = 0;
for(let i=a; i<=b; i++){
    sum+=i;
}
console.log("Tổng các số trong khoảng", number +" là: " +sum);