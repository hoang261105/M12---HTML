function sumZero(arr, fn) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(fn(arr[i], arr[j])){
                newArr.push(arr[i], arr[j]);
                return newArr;
            }
        }
    }
    return newArr;
}

let arr = [-1, 3, 1, 2];
let result1 = sumZero(arr, function(a, b){
    return a+b === 0;
});
console.log(result1);