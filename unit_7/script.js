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

// Task 14
let arr2 = [1, -2, 0, 5, 10, -152, 293, 2842, -1973, 0];
let out14 = document.querySelector('.out_14');
out14.style.margin = '20px';
let qnt = 0;

for(let i = 0; i < arr2.length; i++){
    if(arr2[i] < 0){
        qnt++;
        out14.innerHTML = qnt;
    }
}

// Task 15

let out15 = document.querySelector('.out_15');
out15.style.margin = '20px';


// let minus = arr2.filter(elem => elem < 0)
// console.log(minus);

for(let i = 0; i < arr2.length; i++){
    if(arr2[i] < 0){
        out15.innerHTML += arr2[i];
    }
}

// Task 16

let createBtn = document.querySelector('.create').onclick = createArray;
let inputCreate = document.querySelector('.array');
let out16 = document.querySelector('.out_16');
out16.style.margin = '20px';
let arr16 = [];

function createArray(){
    for(let i = 0; i < inputCreate.value; i++){
        arr16.push(1);
    }
    out16.innerHTML = arr16;
}

// Task 17

let btn = document.querySelector('.create2').onclick = createArray;
let create = document.querySelector('.array2');
let out17 = document.querySelector('.out_17');
let arr17 = [];

function createArray(){
    for(let i = 0; i < create.value; i++){
        arr17.push(Math.floor(Math.random() * 101));
    }
    out17.innerHTML = arr17;
}

// Task 18

let out18 = document.querySelector('.out_18');
let btn18 = document.querySelector('.btn18');
btn18.addEventListener('click', addElements);
btn18.style.margin = '20px';
let arr18_1 = [1, 5, 'Hello', 253, '13', 'Ja-Ja', 9372];
let arr18_2 = [];

function addElements(){
    for(let i = 0; i < arr18_1.length; i++){
        if(typeof arr18_1[i] === 'number' ){
            arr18_2.push(arr18_1[i]);
        }
        out18.innerHTML = arr18_2;
    }
}

// Task 19

let out19_max = document.querySelector('.out_19_max');
let out19_arr = document.querySelector('.out_19_arr');
let btn19 = document.querySelector('.btn19');
btn19.addEventListener('click', showMax);
btn19.style.margin = '20px';

let arr_19 = [1, 7, 251, 9753, -24, 0, 274, 32];
let max = 0;

function showMax(){
    for(let i = 0; i < arr_19.length; i++){
        if(arr_19[i] > max){
            max = arr_19[i];
        }
    }
    out19_arr.innerHTML = arr_19;
    out19_max.innerHTML = max;

}

// Task 20

let out20 = document.querySelector('.out_20');
let btn20 = document.querySelector('.btn20');
btn20.addEventListener('click', showStat);

let arr_20 = [1, 5, 23, 27, 946, 5, 37, 956, 625, 12, 1, 27, 37, 37, 37, 1736,]
let ob = {}
function showStat(){
    for(let i = 0; i < arr_20.length; i++){
        if(ob[arr_20[i]] === undefined){
            ob[arr_20[i]] = 1;
        }else{
            ob[arr_20[i]]++;
        }
    }
    for(let el in ob){
        out20.innerHTML += `${el}: ${ob[el]} <br>`;
    }
}