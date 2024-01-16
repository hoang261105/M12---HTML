let a = +prompt("Nhập a");
let b = +prompt('Nhập b');
let arr1 = [];
let arr2 = [];

for(let i=1; i<=a; i++){
    if(i%b==0){
        arr1.push(i);
    }
}
console.log(arr1);

for(let j=1; j<=b; j++){
    if(j%a==0){
        arr2.push(j);         
    }
}
console.log(arr2);