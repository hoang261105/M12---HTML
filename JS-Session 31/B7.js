function fakeFilter(arr, fn) {
    let newArr = []
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr = [1, 2, 3, 4];
let result1 = fakeFilter(arr, function(e){
    if(e%2===0){
        return true;
    }else{
        return false;
    }
});
console.log(result1);

let result2 = fakeFilter(arr, function(e){
    if(e%2!==0){
        return true;
    }else{
        return false;
    }
});
console.log(result2);
