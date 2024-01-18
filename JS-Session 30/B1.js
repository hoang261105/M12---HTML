function isSymmetricalArr(arr) {
    let length = arr.length;
    for(let i=0; i<length/2; i++){ // Duyệt đến phần tử giữa của mảng
        if(arr[i] !== arr[length-i-1]){ // Kiểm tra phần tử đối xứng
            return false; // Không đối xứng trả về false
        }
    }
    return true; // Đối xứng trả về là true
}

let arr = [1, 2, 3, 2, 1];

let check = isSymmetricalArr(arr);
if(check){
    console.log("Mảng đối xứng nhau");
}else{
    console.log("Mảng không đối xứng nhau");
}