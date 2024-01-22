function Info(id, name, phone, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}

Info.id = +prompt("Nhập id");
Info.name = prompt("Nhập họ và tên");
Info.phone = prompt("Nhập số điện thoại");
Info.address = prompt("Nhập địa chỉ");

console.log("id: ", Info.id);
console.log("name: ", Info.name);
console.log("phone: ", Info.phone);
console.log("address: ", Info.address);



