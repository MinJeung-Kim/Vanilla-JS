'user strict';
const puzzleDiv = document.querySelector('#puzzle');
const guesses = document.querySelector('#guesses');

// 1. PUZZLE 가져오기 (서버연결)
const startGame = async () => {
  const puzzle = await getPuzzle('3');

  puzzleWordStringStar(puzzle);
};

// 2. PUZZLE `*`표시
function puzzleWordStringStar(puzzle) {
  for (let word of puzzle) {
    console.log(`word => ${word} `);
    const span = document.createElement('span');
    if (word !== ' ') {
      span.innerText = '*';
    } else {
      span.innerText = '';
    }
    puzzleDiv.appendChild(span);
  }

  document.addEventListener('keypress', compare);
}

// 3. 눌러진 키(KEY)와 서버에서 가져온 PUZZLE 비교하기
function compare(event, word) {
  console.log(event.key);
  if (event.key === word) {
    span.innerText = `${word}`;
  }
}

// document.addEventListener('keypress', (event) => {
//   console.log(event.key);
//   if (event.key === word) {
//     span.innerText = `${word}`;
//   }
// });

document.querySelector('#reset').addEventListener('click', startGame);
startGame();
