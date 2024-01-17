function findArr(arr) {
    let maxLength = 0;
    let maxLengthElement = "";
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > maxLength){
            maxLength = arr[i].length;
            maxLengthElement = arr[i];
        }
    }
    return maxLengthElement;
}

let arr = ["banana", "apple", "cooking", "readingbook"];

let maxLengthElement = findArr(arr);
console.log(maxLengthElement);