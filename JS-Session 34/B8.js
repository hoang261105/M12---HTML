function deleteRow(button) {
    var row = button.parentNode.parentNode; // Dùng để truy cập vào phần tử cha của 1 phần tử HTML hoặc DOM
    row.parentNode.removeChild(row);
}