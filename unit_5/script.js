// Task 1
let switchOn = document.querySelector('.switch');

switchOn.onclick = changeStyle;

function changeStyle(){
    document.querySelector('link').href = 'style2.css';
    switchOn.style.display = 'none';
}

// Task 2


let addBtn = document.querySelector('.add');
let word = document.querySelector('.task2 p');

addBtn.addEventListener('click', addWord);

function addWord(){
    word.innerHTML += ' word';
}

// Task 3 - 6 

word.insertAdjacentHTML('afterbegin', 'any text ');
word.insertAdjacentHTML('beforebegin', 'any second text ');
word.insertAdjacentHTML('beforeend', ' before end text ');
word.insertAdjacentHTML('afterend', ' after end text ');

// Task 7

let hi = document.querySelector('.hi');

// hi.outerHTML = '<b>Hi</b>';
hi.outerText = '<b>Hi</b>';