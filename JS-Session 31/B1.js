let str = "Phạm Phương Anh";

function longestWord(str) {
    let arr = str.split(" ");
    let newArr = [];
    let longestWord = 0;
    for(let i=0; i<arr.length; i++){
        let word = arr[i];
        if(word.length > longestWord){
            longestWord = word.length;  
            newArr = [word, word.length];
        }
    }
    return newArr;
}

let maxLength = longestWord(str);
console.log(maxLength);

