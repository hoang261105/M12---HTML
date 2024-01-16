let arr = [-4, 8, -10, 7, -5, -24, 54];
let newArr = [];

for(let i=0; i<=arr.length-1; i++){
    if(arr[i] < 0){
        newArr.unshift(arr[i]);
    }else{
        newArr.push(arr[i]);
    }
}

console.log(newArr);