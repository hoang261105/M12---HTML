let num = prompt("Nhập vào 1 số cần tìm");

let arr = [2, 4, 6, 8, 8, 10, 4, 12, 8];

let found = 0, count = 0;

for(let index in arr){
    if(num == arr[index]){
        count++;
        found = 1;
    }  
}
console.log("Số giá trị bằng",num, "trong mảng là:",count);
if(!found){
    console.log("Không tìm thấy");
}