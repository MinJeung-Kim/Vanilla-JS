'user strict';
const puzzleDiv = document.querySelector('#puzzle');
const guesses = document.querySelector('#guesses');
let puzzleCount;
function puzzleWord() {}

const startGame = async () => {
  const puzzle = await getPuzzle('3');

  // 추가 개발
  puzzleCount = puzzle.length;

  for (let i = 0; i < puzzleCount; i++) {
    console.log(`puzzle => ${puzzle.charAt(i)}`);
    const p = document.createElement('span');
    p.innerText = puzzle.charAt(i);
    puzzleDiv.appendChild(p);
  }
};

document.querySelector('#reset').addEventListener('click', startGame);
startGame();
