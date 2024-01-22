function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

let person = new Person();

person.name = prompt("Nhập tên");
person.age = +prompt("Nhập tuổi");
person.address = prompt("Nhập địa chỉ");

console.log(person);

person.birthdate = prompt("Nhập ngày sinh");
delete person.age;

console.log(person);



