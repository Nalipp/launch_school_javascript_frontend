let words = ['horse', 'pig', 'tiger']; 

let gameState = {
  targetWord : null,
  currentGuess : null,
  incorrectGuesses : [],
  guessesRemaining : 7
};

let gameStateCopy = gameState;

init(gameState);

function chooseWord () {
  return words[Math.floor(Math.random()*words.length)];
}

function createWordTiles (word) {
  var tiles = document.querySelector('#word'); 
  word.split('').forEach(function() {
    var newDiv = document.createElement('div');
    newDiv.classList.add('letter');
    tiles.appendChild(newDiv);
  });
}

function validate(guess) {
  if (/[a-z]/.test(guess) && guess.length !== 1) alert('please choose one letter');
}

function testGuess(gameState, guess) {
  gameState.guess = guess;

  var matches = [];
  for (var i = 0; i < gameState.targetWord.length; i++) {
    if (gameState.targetWord[i].indexOf(guess) !== -1) {
      matches.push(i);
    }
  }
  return matches; 
}

function updateWordTiles(gameState, indices) {
  var word = document.querySelector('#word').children;
  indices.forEach(function(index) {
    word[index].textContent = gameState.guess;
  });
}

function updateScoreboard(gameState) {
  var trs = document.querySelectorAll('tr');

  gameState.incorrectGuesses.forEach(function(guess) {
    var td = document.createElement('td')
    td.classList.add('letter');
    td.textContent = guess;
    trs[0].appendChild(td);
  });

  trs[1].children[1].textContent = gameState.guessesRemaining -= 1;
}

function checkWin(gameState) {
  var word = document.querySelector('#word');
  if (word.children.length === gameState.textContent) {
    alert('winner!');
    reset();
  } else if (gameState.guessesRemaining < 1) { 
    alert('you have lost! correct answer was ' + gameState.targetWord);
    reset();
  } 
}

function reset() {
  gameState = gameStateCopy;
  document.querySelectorAll('td').forEach(function(value) {
    value.remove();
  });
  init(gameState);
}

function listen(gameState) {
  var btn = document.querySelector('button');
  var input = document.querySelector('input');

  btn.addEventListener('click', function() {
    var guess = input.value
    validate(guess)
    var indices = testGuess(gameState, guess);
    updateWordTiles(gameState, indices)
    updateScoreboard(gameState);
    checkWin(gameState);
  });
}

function init (gameState) {
  gameState.targetWord = chooseWord();
  createWordTiles(gameState.targetWord);
  listen(gameState)
}


