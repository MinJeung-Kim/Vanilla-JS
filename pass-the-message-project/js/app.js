'user strict';

const input = document.querySelector('input');
const printString = document.querySelector('.print');
const but = document.querySelector('button');
let message = document.querySelector('.message');

but.addEventListener('click', inputUpdate);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    inputUpdate();
  } else {
    setTimeout(function () {
      message.classList.replace('feedback', 'show');
    }, 2000);
  }
});

function inputUpdate() {
  console.log(input.value);
  printString.innerHTML = input.value;
  message.classList.replace('show', 'feedback');
  input.value = '';
  input.focus();
}
