let arr = [1, 3, 4, 5, 8];
let n = +prompt("Nhập số n");
let smallestSubarray = [];

for(let i = 0; i < arr.length; i++) {
    let subarray = [arr[i]];
    let sum = arr[i];
    
    for(let j = i + 1; j < arr.length; j++) {
        sum += arr[j];
        subarray.push(arr[j]);
        
        if(sum > n && (smallestSubarray.length === 0 || subarray.length < smallestSubarray.length)) {
            smallestSubarray = [...subarray];
            break;
        }
    }
}

console.log("Mảng con nhỏ nhất có tổng lớn hơn", n, "là:", smallestSubarray);