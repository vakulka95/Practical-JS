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

let paragraph = document.querySelectorAll('.main p');

for(let i = 0; i < paragraph.length; i++){
    paragraph[i].innerHTML += i + 1;
}

// Task 10
let arrayOfZodiacs = [
    ["Козерог", 12, 1, 22, 31, 1, 20 ],
    ["Водолей", 1, 2, 21, 31, 1, 18 ],
    ["Рыбы", 2, 3, 19, 28, 1, 20 ],
    ["Овен", 3, 4, 21, 31, 1, 20 ],
    ["Телец", 4, 5, 21, 31, 1, 21 ],
    ["Близнецы", 5, 6, 22, 31, 1, 21 ],
    ["Рак", 6, 7, 22, 31, 1, 22 ],
    ["Лев", 7, 8, 23, 31, 1, 23 ],
    ["Дева", 8, 9, 24, 31, 1, 23 ],
    ["Весы", 9, 10, 24, 31, 1, 23 ],
    ["Скорпион", 10, 11, 24, 31, 1, 22 ],
    ["Стрелец", 11, 12, 23, 31, 1, 21 ],
]


let zodiac = document.querySelector('.zodiac-btn').onclick = () => {
    let monthInp = document.querySelector('.month');
    let dayInp = document.querySelector('.day');
    let out = document.querySelector('.out_10')
    month = parseInt(monthInp.value);
    day = parseInt(dayInp.value);

    for(let i = 0; i < arrayOfZodiacs.length; i++){
        if(month === arrayOfZodiacs[i][1]){
            if(day >= arrayOfZodiacs[i][3] && day <= arrayOfZodiacs[i][4]){
                out.innerHTML = arrayOfZodiacs[i][0];
            }
        }else if(month === arrayOfZodiacs[i][2]){
            if(day >= arrayOfZodiacs[i][5] && day <= arrayOfZodiacs[i][6]){
                out.innerHTML = arrayOfZodiacs[i][0];
            }
        }
    }
};


// Task 11

let span = document.querySelectorAll('span');

for(let i = 0; i < span.length; i++){
    span[i].style.backgroundColor = 'yellow';
}

// Task 12

let quontity = document.querySelectorAll('p');
for(let i = 0; i < quontity.length; i++){
    let out11 = document.querySelector('.out_11');
    out11.style.margin = '30px';
    out11.innerHTML = `Колличество параграфов на странице: ${i}`;
}


// Task 13

const arr = [1, 0, 0, 0, 0];

let out13 = document.querySelector('.out_13');
let moveBtn = document.querySelector('.move-btn').addEventListener('click', move);
out13.innerHTML = arr;

let a = 0;

function move(){
    arr[a+1] = 1;
    a++
    arr[a-1] = 0;
    if( arr[arr.length-1] === 1 ){
        arr.length = 5;
    }
    out13.innerHTML = arr;
}



