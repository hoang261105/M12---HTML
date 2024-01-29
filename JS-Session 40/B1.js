// Kiểm tra xem đã có thông tin trong localStorage hay chưa
document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('thongtin')) {
        var thongtin = JSON.parse(localStorage.getItem('thongtin'));
        var thongtinText = "Thông tin của bạn là:<br>";
        thongtinText += "Tên: " + thongtin.ten + "<br>";
        thongtinText += "Tuổi: " + thongtin.tuoi + "<br>";
        thongtinText += "Email: " + thongtin.email + "<br>";
        document.getElementById('thongtin').innerHTML = thongtinText;
    } else {
        document.getElementById('thongtin').innerText = "Chưa có thông tin";
    }
});

let saveInfo = document.getElementById("save");

saveInfo.onclick = function luuThongTin() {
    var ten = document.getElementById('ten-input').value;
    var tuoi = document.getElementById('tuoi-input').value;
    var email = document.getElementById('email-input').value;

    var thongtin = {
        ten: ten,
        tuoi: tuoi,
        email: email,
    };

    localStorage.setItem('thongtin', JSON.stringify(thongtin));

    var thongtinText = "Thông tin của bạn là:<br>";
    thongtinText += "Tên: " + ten + "<br>";
    thongtinText += "Tuổi: " + tuoi + "<br>";
    thongtinText += "Email: " + email + "<br>";
    document.getElementById('thongtin').innerHTML = thongtinText;
}

