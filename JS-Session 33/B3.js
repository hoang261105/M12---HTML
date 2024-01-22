function Info(name, phone, email){
    this.name = name;
    this.phone = phone;
    this.email = email;
}

let phoneBook = {
    contact1: {
        name: "Alice",
        phone: "123-456-7890",
        email: "alice@example.com",
        displayInfo: function(){
            console.log("Tên:", this.name);
            console.log("Điện thoại:", this.phone);
            console.log("Email:", this.email);
            console.log("------------------------");
        },
    },
};
phoneBook.contact1.displayInfo();
