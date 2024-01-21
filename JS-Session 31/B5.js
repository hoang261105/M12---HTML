function chunkArr(arr, n) {
    let result = [];
    for(let i=0; i<arr.length; i+=n){
        let chunk = arr.slice(i, i+n);
        result.push(chunk);
    }
    return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = chunkArr(arr, 2);
console.log(result);