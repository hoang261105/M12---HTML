const image = document.getElementById("myImg");
const percentTest = document.getElementById("percent");
image.classList.add('mờ-nhạt');

let percent = 0;
const interval = setInterval(() => {
    percent += 10;
    if(percent > 100){
        percent = 100;
        clearInterval(interval);
    }
    image.style.filter = `brightness(${percent}%)`;
    image.style.opacity = percent / 100;
    percentTest.textContent = `${percent}%`;
}, 200);