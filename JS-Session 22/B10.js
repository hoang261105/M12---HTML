// Trong JavaScript, các giá trị được đánh giá dựa trên tính chất "truthy" (đúng) hoặc "falsy" (sai). 
// Đây là khái niệm quan trọng khi làm việc với các biểu thức điều kiện, vòng lặp và các phép gán trong JavaScript.

// Tất cả các giá trị khác không nằm trong danh sách trên đều được coi là "truthy" trong JavaScript. 
// Các giá trị "truthy" có thể là các giá trị boolean đúng (true), các số khác 0, các chuỗi không rỗng, mảng không rỗng, đối tượng và hầu hết các giá trị được đánh giá là đúng trong ngữ cảnh điều kiện.

// VD:

let num = prompt("Nhập 1 giá trị");

if(num){
    console.log("Giá trị đã nhập là truthy.");
}else{
    console.log("Giá trị vùa nhập là falsy.")
}