function endsWithStr(str, substr) {
    return str.endsWith(substr); // Hàm kiểm tra xem chuỗi gốc str có kết thúc bằng chuỗi con subStr hay không.
}

let str = "Hello World";
let substr = "orld2";
console.log(endsWithStr(str, substr));