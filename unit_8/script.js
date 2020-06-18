// Task 1
let block = document.querySelector('.block');
block.style.width = '300px';
block.style.height = '300px';

block.onmousedown = () => {
    return false;
}
block.onselectstart = () => {
  return false;
}

block.ondblclick = () => {
  alert('hello')
}
// Task 2
document.oncontextmenu = () => {
    return false;
}

// Task 3
let block2 = document.querySelector('.block2');
block2.style.backgroundImage = "url('img/close.png')";
block2.style.backgroundRepeat = "no-repeat";
block2.style.width = '400px';
block2.style.height = '400px';

block2.onmouseenter = () => {
    block2.style.backgroundImage = "url('img/open.png')";
block2.style.backgroundRepeat = "no-repeat";
}

block2.onmouseleave = () => {
    block2.style.backgroundImage = "url('img/close.png')";
block2.style.backgroundRepeat = "no-repeat";
}

// Task 4

let task4 = document.querySelector('.task4');
task4.style.display = 'flex';
task4.style.justifyContent = 'space-around';

let block3_1 = document.querySelector('.block3-1');
block3_1.style.width = '300px';
block3_1.style.height = '300px';
block3_1.style.border = '3px solid #000'
let block3_2 = document.querySelector('.block3-2');
block3_2.style.width = '300px';
block3_2.style.height = '300px';
block3_2.style.border = '3px solid #000'
let block3_3 = document.querySelector('.block3-3');
block3_3.style.width = '300px';
block3_3.style.height = '300px';
block3_3.style.border = '3px solid #000'

function getColor(){
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);

   return`rgba(${r}, ${g}, ${b})`;
}

block3_1.onmouseenter = () => {
    block3_1.style.backgroundColor = getColor();
}
block3_2.onmouseenter = () => {
    block3_2.style.backgroundColor = getColor();
}
block3_3.onmouseenter = () => {
    block3_3.style.backgroundColor = getColor();
}