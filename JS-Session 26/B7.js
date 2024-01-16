const arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
const num = +prompt("Nhập 1 số");
let sum = 0;
let start = 0;
let end = -1;


for(let i=0; i< arr.length; i++){
    sum += arr[i];
    while(sum > num){
        sum -= arr[start];
        start++;
    }
    if(sum == num){
        end = i;
        break;
    }
}


if(end != -1){
    const newArr = arr.slice(start, end + 1);
    console.log("Mảng con:",newArr);
}else{
    console.log("Không tìm thấy mảng con thỏa mãn.");
}