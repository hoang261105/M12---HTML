let arr = [1, 4, 6, 3, 8, 7, 9, 11, 15, 20];

let arr1 = [];
let arr2 = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        arr1.push(arr[i]);
    }
}
console.log(arr1);

for(let j=0; j<arr.length; j++){
    if(arr[j]%2!==0){
        arr2.push(arr[j]);
    }
}
console.log(arr2);