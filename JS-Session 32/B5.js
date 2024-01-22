function Book(author, name) {
    this.author = author;
    this.name = name;
}

let arr = [];

let Auth = prompt("Nhập tác giả của cuốn sách");

let book1 = new Book("Nguyễn Bỉnh Khiêm", "Nhàn");
let book2 = new Book("Kim Lân", "Làng");
arr.push(book1);
arr.push(book2);

let found = 0;
for(let index in arr){
    if(arr[index].author === Auth){
        console.log(arr[index]);
        found = 1;
    }
}
if(!found){
    console.log("Không tìm thấy sách");
}
