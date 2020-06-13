// Task 1

let checkFigBtn = document.querySelector('.guess-figure-btn');
let checkFigInp = document.querySelector('.guess-figure-inp');

let figure = Math.floor( Math.random() * 10 );
console.log(figure);
// guessFigInp = parseInt(guessFigInp.value);   

function checkFigure(){
    input = checkFigInp.value
    input = parseInt(input);
    console.log(input);
    if(input === figure){
        alert('Congratulate, you win!');
        location.reload();
    }else if(input < figure){
        alert('Need more!');
    }else{
        alert('Need less!');
    }
}

checkFigBtn.addEventListener('click', checkFigure);

// Task 2

let btn = document.querySelector('.btn-2');
let count = 3;

btn.addEventListener('click', changeCount);

function changeCount(){
    count--
    let out = document.querySelector('.out');
    out.innerHTML = count;

    if(count === 2){
        btn.value = 'Do not press me!'
    }else if(count === 0){
        btn.style.display = 'none';
    }
}

// Task 3

let first = document.querySelector('.fr-figure');
let second = document.querySelector('.sc-figure');
let compare = document.querySelector('.compare')
let out = document.querySelector('.sc-out');

first.style.marginTop = '20px';
second.style.marginTop = '20px';

compare.addEventListener('click', compareInputs);

function compareInputs(){
    let frValue = first.value;
    let scValue = second.value;
    frValue = parseInt(frValue);
    scValue = parseInt(scValue);

    if(frValue > scValue){
        out.innerHTML = frValue;
    }else if(frValue < scValue){
        out.innerHTML = scValue;
    }else{
        out.innerHTML = 'They are equal'
    }
}

// Task 4

let monthInp = document.querySelector('.month');
let dayInp = document.querySelector('.day');
let btnZod = document.querySelector('.btn-zod');
let zodiac = document.querySelector('.zod-out');

btnZod.addEventListener('click', showZodiac);

function showZodiac(){
    month = parseInt(monthInp.value);
    day = parseInt(dayInp.value);
    console.log(day);

    if(month === 3){
        if(day >= 21){
            zodiac.innerHTML = "Ваш знак зодиака Овен";
        }
    }else if(month === 4){
        if(day <= 19){
            zodiac.innerHTML = "Ваш знак зодиака Овен";
        }
    }
    
    if(month === 4){
        if(day >= 20){
            zodiac.innerHTML = 'Ваш знак зодиака Телец';
        }
    }else if(month === 5){
        if(day <= 20){
            zodiac.innerHTML = 'Ваш знак зодиака Телец';
        }
    }

    if(month === 5){
        if(day >= 21){
            zodiac.innerHTML = 'Ваш знак зодиака Близнец';
        }
    }else if(month === 6){
        if(day <= 20){
            zodiac.innerHTML = 'Ваш знак зодиака Близнец';
        }
    }

    if(month === 6){
        if(day >= 21){
            zodiac.innerHTML = 'Ваш знак зодиака Рак';
        }
    }else if(month === 7){
        if(day <= 22){
            zodiac.innerHTML = 'Ваш знак зодиака Рак';
        }
    }

    if(month === 7){
        if(day >= 23){
            zodiac.innerHTML = 'Ваш знак зодиака Лев';
        }
    }else if(month === 8){
        if(day <= 22){
            zodiac.innerHTML = 'Ваш знак зодиака Лев';
        }
    }

    if(month === 8){
        if(day >= 23){
            zodiac.innerHTML = 'Ваш знак зодиака Дева';
        }
    }else if(month === 9){
        if(day <= 22){
            zodiac.innerHTML = 'Ваш знак зодиака Дева';
        }
    }

    if(month === 9){
        if(day >= 23){
            zodiac.innerHTML = 'Ваш знак зодиака Весы';
        }
    }else if(month === 10){
        if(day <= 22){
            zodiac.innerHTML = 'Ваш знак зодиака Весы';
        }
    }

    if(month === 10){
        if(day >= 23){
            zodiac.innerHTML = 'Ваш знак зодиака Скорпион';
        }
    }else if(month === 11){
        if(day <= 12){
            zodiac.innerHTML = 'Ваш знак зодиака Скорпион';
        }
    }

    if(month === 11){
        if(day >= 22){
            zodiac.innerHTML = 'Ваш знак зодиака Стрелец';
        }
    }else if(month === 12){
        if(day <= 21){
            zodiac.innerHTML = 'Ваш знак зодиака Стрелец';
        }
    }

    if(month === 12){
        if(day >= 22){
            zodiac.innerHTML = 'Ваш знак зодиака Козерог';
        }
    }else if(month === 1){
        if(day <= 19){
            zodiac.innerHTML = 'Ваш знак зодиака Козерог';
        }
    }

    if(month === 1){
        if(day >= 20){
            zodiac.innerHTML = 'Ваш знак зодиака Водолей';
        }
    }else if(month === 2){
        if(day <= 18){
            zodiac.innerHTML = 'Ваш знак зодиака Водолей';
        }
    }

    if(month === 2){
        if(day >= 19){
            zodiac.innerHTML = 'Ваш знак зодиака Рыба';
        }
    }else if(month === 3){
        if(day <= 20){
            zodiac.innerHTML = 'Ваш знак зодиака Рыба';
        }
    }
}

// Task 5

let btnYear = document.querySelector('.btn-year');
let yearInp = document.querySelector('.year');
let yearOut = document.querySelector('.out-year')
btnYear.addEventListener('click', checkSymbol);

function checkSymbol(){
    let year = parseInt(yearInp.value);

    if(year % 12 === 4){
        yearOut.innerHTML = 'Ваш год Крысы';
    }else if(year % 12 === 5){
        yearOut.innerHTML = 'Ваш год Быка';
    }else if(year % 12 === 6){
        yearOut.innerHTML = 'Ваш год Тигра';
    }else if(year % 12 === 7){
        yearOut.innerHTML = 'Ваш год Кролика';
    }else if(year % 12 === 8){
        yearOut.innerHTML = 'Ваш год Дракона';
    }else if(year % 12 === 9){
        yearOut.innerHTML = 'Ваш год Змея';
    }else if(year % 12 === 10){
        yearOut.innerHTML = 'Ваш год Лошади';
    }else if(year % 12 === 11){
        yearOut.innerHTML = 'Ваш год Овцы';
    }else if(year % 12 === 0){
        yearOut.innerHTML = 'Ваш год Обезьяны';
    }else if(year % 12 === 1){
        yearOut.innerHTML = 'Ваш год Петуха';
    }else if(year % 12 === 2){
        yearOut.innerHTML = 'Ваш год Собаки';
    }else if(year % 12 === 3){
        yearOut.innerHTML = 'Ваш год Свиньи';
    }
}