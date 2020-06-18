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

document.oncontextmenu = () => {
    return false;
}

// Task 2
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

