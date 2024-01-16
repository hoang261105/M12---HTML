var imp = prompt("Nhập vào 1 số bất kỳ");
let found = 0;
let arr = [10, 20, "Huyền"];

for(let index in arr){
    if(imp == arr[index]){
        console.log(index);
        found = 1;
        break;
    }
}
if(!found){
    console.log("Phần tử không tồn tại");
}
