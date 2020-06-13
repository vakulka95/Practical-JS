let text = document.querySelector('.text');
let body = document.querySelector('body');

let colorBtn = document.querySelector('.color-btn').onclick = () => {
    let colorInput = document.getElementById('bg-color');
    let colorText = document.querySelector('#font-color');
    body.style.backgroundColor = colorInput.value;
    text.style.color = colorText.value;
}

let def = document.querySelector('.default-btn').onclick = () => {
    text.style.color = '#000000';
    body.style.backgroundColor = '#ffffff';
}