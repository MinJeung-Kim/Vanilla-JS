'user strict';

const lowerBtn = document.querySelector('.lowerCnt');
const addBtn = document.querySelector('.addCnt');
const num = document.querySelector('.num');
let count = num.textContent;

function calc(pram) {
  num.textContent = pram;

  if (num.textContent < 0) {
    num.style.color = 'red';
  } else if (num.textContent > 0) {
    console.log(num.className);
    num.style.color = 'green';
  } else {
    num.style.color = '#333333';
  }
}

lowerBtn.addEventListener('click', () => {
  calc(--count);
});

addBtn.addEventListener('click', () => {
  calc(++count);
});
