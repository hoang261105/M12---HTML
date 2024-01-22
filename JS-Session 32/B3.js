let n = +prompt("Nhập số lượng sinh viên");
let Student = [];

function students(id, name) {
    this.id = id;
    this.name = name;
}

for(let i=0; i<n; i++){
    let id = +prompt("Nhập id");
    let name = prompt("Nhập họ và tên");
    let student = new students(id, name);
    Student.push(student);
}

for(let i=0; i<Student.length; i++){
    console.log("Thông tin sinh viên thứ " +(i+1));
    console.log("Id:" +Student[i].id);
    console.log("Name:" +Student[i].name);
}

