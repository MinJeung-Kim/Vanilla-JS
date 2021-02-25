'user strict';
const puzzleDiv = document.querySelector('#puzzle');
const guesses = document.querySelector('#guesses');
let puzzleCount;

const startGame = async () => {
  const puzzle = await getPuzzle('3');

  puzzleCount = puzzle.length;

  for (let i = 0; i < puzzleCount; i++) {
    console.log(`puzzle => ${puzzle.charAt(i)}`);
    const p = document.createElement('span');
    if (puzzle.charAt(i) === null || puzzle.charAt(i) === ' ') {
      p.innerText = ' ';
    }
    p.innerText = '*';
    puzzleDiv.appendChild(p);
  }
};

document.querySelector('#reset').addEventListener('click', startGame);
startGame();
