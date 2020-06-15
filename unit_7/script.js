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
let out4 = document.querySelector('.out_3');
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
    out.innerHTML = parsed_1** parsed_2;
}

// Task 6

for(let i = 1; i < 10; i++){
    let out = document.querySelector('.out_6');
    out.innerHTML += `7 * ${i} = ${7 * i} <br>`;
}

