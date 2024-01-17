function printArr(arr){
    var newArr = [];
    var str = prompt("Nhập 1 chuỗi");
    let found = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === str){
            found = 1;
            newArr.push(arr[i]);
        }
    }
    if(!found){
        console.log("Không tìm thấy");
    }
    return newArr;
}

var arr = ["2", "hoàng", "cooking", "12", "dương", "90", "Hà Nội"];

var newArr = printArr(arr);
console.log(newArr);

