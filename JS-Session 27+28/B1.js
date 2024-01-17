let arr = [1, 3, 5, 7, 8, 9];

let max = arr[0];
let min = arr[0];

for(let i=1; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i];
    }
    if(min>arr[i]){
        min = arr[i];   
    }
}
console.log("GTLN và GTNN trong mảng là:",max, min);