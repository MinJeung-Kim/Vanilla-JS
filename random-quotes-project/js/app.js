'user strict';

const clickBtn = document.querySelector('#generate-btn');

clickBtn.addEventListener('click', () => {
  const data = fetch('data/data.json')
    // json으로 변환
    .then((response) => response.json())
    // json의 items를 리턴
    .then((json) => json.items);

  data.then((items) => {
    // const filtered = items.filter((item) => item[key] === value);
    // console.log(items);
    items.forEach((item) => {
      console.log(item.quote);
      const quote = document.querySelector('#quote');
      quote.innerText = item.quote;
    });
  });
});
