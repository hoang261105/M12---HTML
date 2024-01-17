let arr = [1, 4, 5, 1, 5, 6, 7, 9 ,11];

let firstUnique = null;
for(let i=0; i<arr.length; i++){
    let isUnique = true;
    for(let j=0; j<arr.length; j++){
        if(i != j && arr[i] == arr[j]){
            isUnique = false;
            break;
        }
    }
    if(isUnique){
        firstUnique = arr[i];
        break;
    }
}
if(firstUnique !== null){
    console.log("PHần tử đầu tiên độc nhất trong mảng là:",firstUnique);
}else{
    console.log("Không có phần tử độc nhất trong mảng");
}