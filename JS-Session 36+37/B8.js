let $ = document.querySelector.bind(document);

function handleSubmit(e) {
  e.preventDefault();

  var buyerName = $("input[name=name1]").value;
  var receiverName = $('input[name="name2"]').value;
  var buyerEmail = $('input[name="email"]').value;
  var buyerPhone = $('input[name="phone"]').value;
  var buyerAddress = $('input[name="address"]').value;
  var orderDate = $('input[name="date"]').value;

  if (
    buyerName === "" ||
    buyerEmail === "" ||
    buyerPhone === "" ||
    buyerAddress === "" ||
    orderDate === ""
  ) {
    alert("Vui lòng điền đầy đủ thông tin người mua.");
    return;
  }
  capalitizeName(buyerName);
  if (receiverName) {
    capalitizeName(receiverName);
  }

 let checkDate = isDateValid(orderDate);
 if(!checkDate){
  alert("Ngày tháng năm không hợp lệ");
 }

  
}

document.getElementById("form").addEventListener("submit", handleSubmit);

function capalitizeName(name) {
  var checkName = name.split("");
  for (var i = 0; i < checkName.length; i++) {
    var word = checkName[i];
    var firstLetter = word.charAt(0);
    if (firstLetter !== firstLetter.toUpperCase()) {
      alert("Tên phải được viết hoa");
      return false;
    }
  }
  return true;
}

function isDateValid(dateStr) {
  var date = /^\d{2}-\d{2}-\d{4}$/;
  return date.test(dateStr);
}

let copyInfo = document.getElementById("checkbox2");

copyInfo.onclick = function copyInfo() {
  var buyerName = document.getElementById("name1").value;
  document.getElementById("name2").value = buyerName;
  var buyerEmail = document.getElementById("email1").value;
  document.getElementById("email2").value = buyerEmail;
  var buyerPhone = document.getElementById("phone1").value;
  document.getElementById("phone2").value = buyerPhone;
  var buyerAddress = document.getElementById("address1").value;
  document.getElementById("address2").value = buyerAddress;
}
copyInfo();

notifi1.onclick = function handleSendEmail(){
  alert("Đặt hàng thành công, email đã gửi tới quý khách");
}

notifi2.onclick = function handlePlaceOrderClick() {
  alert("Đặt hàng thành công");
}

let notifi1 = document.getElementById("checkbox1");
let notifi2 = document.getElementById("submit");

handleSendEmail();
handlePlaceOrderClick();