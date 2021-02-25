'user strict';
const puzzleDiv = document.querySelector('#puzzle');
const guesses = document.querySelector('#guesses');
let puzzleCount;

// 1. PUZZLE WORD 가져오기 (서버연결)

const startGame = async () => {
  const puzzle = await getPuzzle('3');

  puzzleCount = puzzle.length;

  // 2. PUZZLE WORD `*`표시
  for (let i = 0; i < puzzleCount; i++) {
    console.log(`puzzle => ${puzzle.charAt(i)}`);

    const span = document.createElement('span');
    if (puzzle.charAt(i) === ' ') {
      span.innerText = ' ';
    } else {
      span.innerText = '*';
    }
    puzzleDiv.appendChild(span);
  }
};

let keyCount = 5;

// 3. 눌러진 키(KEY)와 서버에서 가져온 PUZZLE WORD 비교하기
document.addEventListener('keypress', (event) => {
  console.log(event.key);
  if (keyCount < 0) {
    keyCount = 0;
  }
  --keyCount;
  guesses.innerText = `Guesses left: ${keyCount}`;
});

document.querySelector('#reset').addEventListener('click', startGame);
startGame();
