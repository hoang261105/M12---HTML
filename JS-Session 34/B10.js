// innerHTML: Lấy ra nội dung là thẻ HTML ở trong 1 thẻ nào đó
let heading1 = document.getElementById("heading");
heading1.innerHTML = "Heading 1";

// innerText: Lấy ra nội dung là text ở trong 1 thẻ nào đó
console.log(heading1.innerText);

// textContent: Lấy ra nội dung của text bao gồm cả lineBreak trong 1 thẻ nào đó
console.log(heading1.textContent);