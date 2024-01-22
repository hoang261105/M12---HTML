function Info(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
}

var phoneBook = {
    contact1: {
        name: "Alice",
        phone: "123-456-7890",
        email: "alice@example.com",
    },
    contact2:{
        name: "Bob",
        phone: "987-654-3210",
        email: "bob@example.com",
    },
};

for(let index in phoneBook){
    let arr = phoneBook[index];
    console.log("Tên:",arr.name);
    console.log("Điện thoại:", arr.phone);
    console.log("Email:",arr.email);
    console.log("------------------------");
}