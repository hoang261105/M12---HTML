let str = "hello world";
let words = str.split(" ");
const arr = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  
  // Kiểm tra xem từ có ít nhất 1 ký tự hay không
  if (word.length > 0) {
    // Lấy ký tự cuối cùng của từ
    let lastChar = word.slice(-1);
    
    // Chuyển đổi ký tự cuối cùng thành chữ hoa
    let capitalizedLastChar = lastChar.toUpperCase();
    
    // Thay thế ký tự cuối cùng trong từ bằng ký tự đã được chuyển đổi
    let newWord = word.slice(0, -1) + capitalizedLastChar;
    
    // Thêm từ đã được chuyển đổi vào mảng arr
    arr.push(newWord);
  } else {
    // Nếu từ không có ký tự, thêm từ gốc vào mảng arr
    arr.push(word);
  }
}

let convertArrayToString =  arr.join(" ");
console.log("Chuỗi sau khi chuyển đổi là: ", convertArrayToString);