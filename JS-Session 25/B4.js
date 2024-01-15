let n = +prompt("Nhập số n");

let sum = 0;
let factorial = 1;
for(let i=1; i<=n; i++){
    factorial *= i;
    sum += factorial;
}
console.log(sum);