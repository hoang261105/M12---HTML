function countStr(str){
    let n = prompt("Nhập vào ký tự bất kỳ");
    let count = 0, found = false;
    for(let i=0; i<str.length; i++){
        if(str[i] === n){
            count++;
            found = true;
        }
    }
    if(!found){
        console.log("Không tìm thấy");
    }
    return count;
}

let str = prompt("Nhập vào 1 chuỗi");

let count = countStr(str);
console.log(count);


