function countStr(str) {
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] !== " "){
           count++;
        }
    }
    return count;
}

let str = prompt("Nhập 1 chuỗi");

let count = countStr(str);
console.log(count);

