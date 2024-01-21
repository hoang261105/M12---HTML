function maxSubArrSum(arr, n) {
    let sum = 0;
    let maxSum = 0;
    for(let i=0; i<n; i++){
        sum += arr[i];
    }
    sum = maxSum;
    for(let i=n; i<arr.length; i++){
        sum = sum - arr[i-n] + arr[i];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

console.log(maxSubArrSum([1, 2, 5, 2, 8, 1, 5],2));

