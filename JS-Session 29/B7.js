function findPairWithSum(arr, num) {
    let sum = 0;
    let start = 0;
    let end = -1;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      while (sum > num) {
        sum -= arr[start];
        start++;
      }
      if (sum === num) {
        end = i;
        break;
      }
    }
  
    if (end !== -1) {
      const newArr = arr.slice(start, end + 1);
      return newArr;
    } else {
      return null;
    }
  }
  
  let arr = [1, 3, 5, 19, 15];
  let num = +prompt("Nhập 1 số");
  let pair = findPairWithSum(arr, num);
  
  if (pair !== null) {
    console.log("Cặp số tìm được:", pair);
  } else {
    console.log("Không tìm thấy cặp số thỏa mãn.");
  }