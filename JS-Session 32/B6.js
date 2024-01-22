function products(id, product_name, price) {
    this.id = id;
    this.product_name = product_name;
    this.price = price;
}

let arr = [];

let product1 = {
    id: 1,
    product_name: "SamSung S24 Ultra",
    price: 24000000,
};

let product2 = {
    id: 2,
    product_name: "Iphone 15 Pro Max",
    price: 32000000,
};
let product3 = {
    id: 3,
    product_name: "Redmi",
    price: 20000000,
};

arr.push(product1);
arr.push(product2);
arr.push(product3);

arr.sort(function(a,b){
    return a.price - b.price;
});

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
