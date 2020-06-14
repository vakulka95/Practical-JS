// Task 1 - 2;
let input = document.querySelector('.text-input');
let pass = document.querySelector('.pass-input');
let range1 = document.querySelector('.range-input');
let date = document.querySelector('.date-input');
let button = document.querySelector('.push-btn');
let check = document.querySelector('.checkbox-input');
let radio = document.querySelector('.radio-btn')
button.onclick = () => {
    console.log(input.value);
    console.log(pass.value);
    console.log(range1.value);
    console.log(date.value);
    if(check.checked){
        console.log('Yes');
    }else{
        console.log('No');
    }
    console.log(radio.checked);
}

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

// Task 5

let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let color3 = document.querySelector('.color3');
let out1 = document.querySelector('.color1-out');
out1.style.width = '30px';
out1.style.height = '30px';
let out2 = document.querySelector('.color2-out');
out2.style.width = '30px';
out2.style.height = '30px';
let out3 = document.querySelector('.color3-out');
out3.style.width = '30px';
out3.style.height = '30px';

let colorBlock = document.querySelector('.color-block');
colorBlock.style.width = '300px';
colorBlock.style.height = '300px';
colorBlock.style.marginTop = '30px';

color1.oninput = changeColor;
color2.oninput = changeColor;
color3.oninput = changeColor;


function changeColor(){
    out1.style.backgroundColor = `rgba(${color1.value}, 0, 0)`;
    out2.style.backgroundColor = `rgba(0, ${color2.value}, 0)`;
    out3.style.backgroundColor = `rgba(0, 0, ${color3.value})`;
    colorBlock.style.backgroundColor = `rgba(${color1.value}, ${color2.value}, ${color3.value})`;
}


