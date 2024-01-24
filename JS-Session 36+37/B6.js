let stuID = document.getElementById("stuID");
let stuName = document.getElementById("stuName");
let myButton = document.getElementById("button");
let stuAge = document.getElementById("stuAge");
let stuPhone = document.getElementById("stuPhone");
let stuEmail = document.getElementById("stuEmail");
let stuInfo = document.getElementById("student-info");

myButton.addEventListener('click', function(){
    var lengthID = stuID.value;
    var lengthName = stuName.value;
    var ageValue = stuAge.value;
    var phoneValue = stuPhone.value;
    var emailValue = stuEmail.value;

    if(lengthID.length !== 6){
        alert("Id phải có 6 kí tự");
        return;
    }
    
    if(lengthName.trim() === ""){
        alert("Tên hs không được để trống");
        return;
    }

    if(ageValue < 18){
        alert("Tuổi phải lớn hơn 18");
        return;
    }

    var phone = /^(0[0-9]{9}|[1-9][0-9]{8})$/;
    if(!phone.test(phoneValue)){
        alert("Sđt phải có định dạng là sđt ở Việt Nam");
        return;
    }
 
    var email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.test(emailValue)){
        alert("Email không hợp lệ");
        return;
    }

    var studentInfoText = "Student ID: " + lengthID + "<br>" +
                          "Student Name: " + lengthName + "<br>" +
                          "Age: " + ageValue + "<br>" +
                          "Phone: " + phoneValue + "<br>" +
                          "Email: " + emailValue;

    var newStudentInfo = document.createElement("div");
    newStudentInfo.innerHTML = studentInfoText;
    stuInfo.appendChild(newStudentInfo);

    stuID.value = "";
    stuName.value = "";
    stuAge.value = "";
    stuPhone.value = "";
    stuEmail.value = "";
});