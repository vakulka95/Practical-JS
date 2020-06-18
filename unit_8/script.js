// Task 1
let block = document.querySelector('.block');
block.style.width = '500px';
block.style.height = '500px';

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

