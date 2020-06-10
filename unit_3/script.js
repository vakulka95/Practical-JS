// Task №1
let hide = document.querySelector('#hide');
let show = document.querySelector('#show');
let block = document.querySelector('#beautiful-block');
let helloBtn = document.querySelector('#hello-btn');
let switchOn = document.querySelector('#switch');
let shy = document.querySelector('#shy');
let bad = document.querySelector('#bad-btn');

hide.onclick = () =>{
    block.style.display = 'none';
}

show.onclick = () =>{
    block.style.display = 'block';
}



// Task №2
function sum(){
    let a = 5;
    let b = 10;
    block.innerHTML = a + b;
}

sum();

// Task №3
helloBtn.onclick = () =>{
    alert('hello');
}

// Task №4
switchOn.onclick = () => {
    function sayHello(){
        console.log('Hello');
    }
    function sayWorld(){
        console.log('world');
    }
    sayHello();
    sayWorld();
};


// Task №5

function hideMe(){
    shy.hidden = true;
}

shy.onclick = hideMe;

// Task №5

function changeValue(){
    bad.value = 'Don’t click me!'
}

bad.onclick = changeValue;