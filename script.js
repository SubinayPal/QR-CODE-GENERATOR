const image = document.getElementById("qrImage");
const input = document.getElementById("textInput");
const button = document.getElementById("generateButton");
const api = 'https://api.qrserver.com/v1/';
const api2 = 'create-qr-code/?size=150x150&data=';

button.addEventListener("click", () => {
    image.src = `${api}${api2}${input.value}`;
    image.classList.add("qr-margin");
});
