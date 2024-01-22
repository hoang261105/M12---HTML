function product(id, name, price, quantity){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

let info1 = new product(1, "Hoàng", 2000000, "Nam");
let info2 = new product(2, "Huyền", 3000000, "Nữ");
console.log(info1);
console.log(info2);



