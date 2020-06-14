// Task 1 - 2;
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

// Task 3

let range = document.querySelector('.size');


let sizeBtn = document.querySelector('.size-btn').onclick = () => {
    
    text.style.fontSize = `${range.value}px`;
}


// Task 4

range.oninput = () => {
    let rangeInput = document.querySelector('.range-value');
    rangeInput.value = range.value;
}