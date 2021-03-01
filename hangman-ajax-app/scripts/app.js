'user strict';
const puzzleDiv = document.querySelector('#puzzle');
const guesses = document.querySelector('#guesses');

let pushCount = 5;
// 1. PUZZLE 가져오기 (서버연결)
const startGame = async () => {
  const puzzleArr = Array.from((await getPuzzle('3')).toUpperCase());
  console.log(`puzzleArr => ${puzzleArr} `);

  // 2. PUZZLE `*`표시
  puzzleArr.forEach((puzzle) => {
    const span = document.createElement('span');
    if (puzzle !== ' ') {
      span.innerText = '*';
    } else {
      span.innerText = '';
    }
    puzzleDiv.appendChild(span);
  });

  guesses.innerText = `Guesses left: 5`;

  // 3. 눌러진 키(KEY)와 서버에서 가져온 PUZZLE 비교하기
  document.addEventListener('keypress', (event) => {
    const spanNum = document.querySelectorAll('span');
    for (let i = 0; i < puzzleArr.length; i++) {
      if (puzzleArr[i] === event.key.toUpperCase()) {
        console.log(`event.key => ${event.key.toUpperCase()} `);
        spanNum[i].innerText = `${event.key.toUpperCase()}`;
      }
    }

    if (pushCount > 1) {
      --pushCount;
      guesses.innerText = `Guesses left: ${pushCount}`;
    } else {
      guesses.innerText = `Nice try! The word was "award winning service"`;
    }
  });
};

document.querySelector('#reset').addEventListener('click', startGame);
startGame();
