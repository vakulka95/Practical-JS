// Task 1
let switchOn = document.querySelector('.switch');

switchOn.onclick = changeStyle;

function changeStyle(){
    document.querySelector('link').href = 'style2.css';
    switchOn.style.display = 'none';
}

// Task 2


let addBtn = document.querySelector('.add');

addBtn.addEventListener('click', addWord);

function addWord(){
    let word = document.querySelector('.task2 p');
    word.innerHTML += ' word';
}