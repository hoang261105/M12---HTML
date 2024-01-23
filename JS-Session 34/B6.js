var button = document.getElementById("button");
var input = document.getElementById("myInput");
var list = document.getElementById("myList");

button.addEventListener("click", function() {
  var inputValue = input.value; // Lấy giá trị từ ô input
  
  if (inputValue !== "") {
    // Tạo một phần tử li mới
    var newLi = document.createElement("li");
    newLi.textContent = inputValue;
    
    // Thêm phần tử li vào danh sách
    list.appendChild(newLi);
    
    // Xóa giá trị trong ô input
    input.value = "";
  }
});