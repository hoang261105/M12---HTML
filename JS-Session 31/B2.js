function largestOfArray(...arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let max = Math.max(...arr[i]);
        result.push(max);
    }
    return result;
}

let max = largestOfArray([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(max);
