'use strict';

const clickBtn = document.querySelector('button');
const changeBg = document.querySelector('body');

clickBtn.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  let hexValue = document.querySelector('#hex-value');
  hexValue.innerText = randomColor;

  document.body.style.backgroundColor = '#' + randomColor;
  color.innerHTML = '#' + randomColor;
});
