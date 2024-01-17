var str = prompt("Nhập vào 1 chuỗi");

const Str = [];

for(let i=0; i<str.length; i++){ // Duyệt qua các vị trí từ 0 đến độ dài của chuỗi
    for(j = i+1; j<=str.length; j++){ // Duyệt qua các vị trí từ i+1 đến độ dài của chuỗi 
        Str.push(str.slice(i,j)); // Trong mỗi lần lặp, sử dụng phương thức slice() để cắt chuỗi từ vị trí i đến vị trí j.
        // Phần tử con được cắt được thêm vào mảng Str bằng cách sử dụng phương thức push().
    }
}
console.log(Str);