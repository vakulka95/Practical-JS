let switchOn = document.querySelector('.switch');

switchOn.onclick = changeStyle;

function changeStyle(){
    document.querySelector('link').href = 'style2.css';
    switchOn.style.display = 'none';
}