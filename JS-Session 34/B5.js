let arr = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

const listItem = document.getElementById("list");
const liHTMLs = arr.map((item) => {
    return `
    <li>${item}</li>
    `;
});
listItem.innerHTML = liHTMLs.join("");



