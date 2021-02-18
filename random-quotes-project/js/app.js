'user strict';

// const clickBtn = document.querySelector('#generate-btn');

// clickBtn.addEventListener('click', () => {
//   const data = fetch('data/data.json')
//     // json으로 변환
//     .then((response) => response.json())
//     // json의 items를 리턴
//     .then((json) => json.items);

//   data.then((items) => {
//     // const filtered = items.filter((item) => item[key] === value);
//     // console.log(items);
//     items.forEach((item) => {
//       console.log(item.quote);
//       const quote = document.querySelector('#quote');
//       quote.innerText = item.quote;
//     });
//   });
// });

function loadItems() {
  return (
    fetch('data/data.json')
      // json으로 변환
      .then((response) => response.json())
      // json의 items를 리턴
      .then((json) => json.items)
  );
}

function setEventListeners(items) {
  const clickBtn = document.querySelector('#generate-btn');
  clickBtn.addEventListener('click', () => onButtonClick(items));
}
let count = 0;

function onButtonClick(items) {
  if (items[count] === undefined) {
    return (count = 0);
  }
  const quote = document.querySelector('#quote');
  const author = document.querySelector('.quote-author');
  quote.innerText = items[count].quote;
  author.innerText = items[count].author;
  count++;
}

// main
loadItems() // items를 동적으로 받아오는 함수
  // Promise객체
  //then() => 성공
  .then((items) => {
    setEventListeners(items);
  })
  .catch(console.log); // 에러
