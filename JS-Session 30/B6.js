let arr = [3, 4, 6, 7];
let result = countTriangles(arr);
console.log(result);

function isTriangle(arr) {
    for(let i=0; i<arr.length-2; i++){
        arr.sort((a, b) => a - b);
        for(let i=0; i<arr.length-2; i++){
            if(arr[i] + arr[i+1] > arr[i+2]){
                return true;
            }
        }
        return false;
    }
}


function countTriangles(arr) {
    let count = 0;
    
    for (let n = 3; n <= arr.length; n++) {
      for (let i = 0; i <= arr.length - n; i++) {
        let newArr = [];
        
        for (let j = i; j < i + n; j++) {
          newArr.push(arr[j]);
        }
        
        if (isTriangle(newArr)) {
          count++;
        }
      }
    }
    
    return count;
  }