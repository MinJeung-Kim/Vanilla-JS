'user strict';
const puzzleDiv = document.querySelector('#puzzle');
const guesses = document.querySelector('#guesses');
let pushCount = 5;

// 1. PUZZLE 가져오기 (서버연결)
const startGame = async () => {
  const puzzleArr = Array.from((await getPuzzle('3')).toUpperCase());
  console.log(`puzzleArr => ${puzzleArr} `);

  guesses.innerText = `Guesses left: ${pushCount}`;

  // 2. PUZZLE `*`표시
  puzzleArr.forEach((puzzle) => {
    const span = document.createElement('span');
    if (puzzle !== ' ') {
      span.innerText = '*';
    }
    puzzleDiv.appendChild(span);
  });

  // 3. 눌러진 키(KEY)와 서버에서 가져온 PUZZLE 비교하기
  document.addEventListener('keypress', (event) => {
    const spanNum = document.querySelectorAll('span');
    let keyPush = event.key.toUpperCase();

    if (pushCount > 1) {
      if (puzzleArr.indexOf(keyPush) === -1) {
        --pushCount;
        guesses.innerText = `Guesses left: ${pushCount}`;
      } else {
        for (let i = 0; i < puzzleArr.length; i++) {
          if (puzzleArr[i] === keyPush) {
            console.log(`event.key => ${keyPush} `);
            spanNum[i].innerText = `${keyPush}`;
          }
        }
      }
    } else {
      guesses.innerText = `Nice try! The word was "award winning service"`;
    }
  });
};

// 4. reset 버튼 클릭했을 때 초기화
function resetGame() {
  puzzleDiv.innerHTML = '';
  pushCount = 5;
  startGame();
}

document.querySelector('#reset').addEventListener('click', resetGame);
startGame();
