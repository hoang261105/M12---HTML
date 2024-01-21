function truncateStr(str, maxLength) {
    if(str.length > maxLength){
        return str.slice(0, maxLength) + "...";
    }
    return str;
}

let str = "Phạm Phương Anh";
let truncate = truncateStr(str,10);
console.log(truncate);