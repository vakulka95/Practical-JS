// Task 1
let out1 = document.querySelector('.out_1');

for(let i = 0; i <= 100; i++){
    out1.innerHTML += i + ' ';
}

// Task 2
let out2 = document.querySelector('.out_2');
out2.style.marginTop = '30px';


for(let i = 0; i <= 101; i++){
    if(i % 2 === 0){
        out2.innerHTML += `${i} `;
    }
}

// Task 3

let out3 = document.querySelector('.out_3');
out3.style.marginTop = '30px';

for(let i = 200; i >= 0; i--){
    out3.innerHTML += i + ' ';
}

// Task 4
let out4 = document.querySelector('.out_4');
out4.style.marginTop = '30px';

let count = 0;

for(let i = 0; i <= 100; i++){
    count += i;
    out4.innerHTML = count;
}

// Task 5
let figure = document.querySelector('.figure');
let degree = document.querySelector('.degree');
let btnDegree = document.querySelector('.btn-degree').onclick = raising;


function raising(){
    let parsed_1 = parseInt(figure.value);
    let parsed_2 = parseInt(degree.value);
    let out = document.querySelector('.out_5');
    out.style.marginTop = '30px'
    out.innerHTML = parsed_1** parsed_2;
}

// Task 6

for(let i = 1; i < 10; i++){
    let out = document.querySelector('.out_6');
    out.style.marginTop = '30px'
    out.innerHTML += `7 * ${i} = ${7 * i} <br>`;
}

// Task 7
let amount = 1;

for(let i = 1; i < 51; i++){
    amount *= i;
    let out = document.querySelector('.out_7');
    out.style.marginTop = '30px'
    out.innerHTML = amount;
}

// Task 8

for(let i = 1000; i <= 2000; i++){
    let out = document.querySelector('.out_8');
    out.style.marginTop = '30px'
    out.innerHTML += `&#${i} / `
}

// Task 9

let par = document.querySelectorAll('p');

for(let i = 0; i <= par.length; i++){
    par[i].innerHTML += i + 1;
}