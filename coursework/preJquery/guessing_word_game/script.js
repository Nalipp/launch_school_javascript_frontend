let words = ['horse', 'pig', 'tiger', 'rabbit', 'turtle', 'grasshopper']; 

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

function isInvalid(guess) {
  return (/[^a-z]/.test(guess) || guess.length !== 1)
}

function testGuess(gameState, guess) {
  gameState.guess = guess;

  var matches = [];
  for (var i = 0; i < gameState.targetWord.length; i++) {
    if (gameState.targetWord[i].indexOf(guess) !== -1) {
      matches.push(i);
    }
  }
  if (matches.length === 0) {
    gameState.incorrectGuesses.push(guess);
    gameState.guessesRemaining -= 1;
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


  var length = trs[0].children.length;

  for (var i = length - 1; i >= 0; i--) {
    if (trs[0].children[i].tagName === 'TD') {
      trs[0].children[i].remove();
    }
  } 

  gameState.incorrectGuesses.forEach(function(guess) {
    var td = document.createElement('td')
    td.classList.add('letter');
    td.textContent = guess;
    trs[0].appendChild(td);
  });

  trs[1].children[1].textContent = gameState.guessesRemaining;
}

function checkWin(gameState) {
  var word = document.querySelector('#word');
  
  if (word.textContent.length === gameState.targetWord.length) {
    alert('winner!');
    reset();
  } else if (gameState.guessesRemaining < 1) { 
    alert('you have lost! correct answer was ' + gameState.targetWord);
    reset();
  } 
}

function reset() {
  gameState = gameStateCopy;
  document.querySelectorAll('div').forEach(function(value) {
    value.remove();
  });
  init(gameState);
}

function listen(gameState) {
  var btn = document.querySelector('button');
  var input = document.querySelector('input');
  input.focus();

  btn.addEventListener('click', function(event) {
    var guess = input.value;
    if (isInvalid(guess)) {
      alert('please choose one letter');
    } else {
      var indices = testGuess(gameState, guess);
      updateWordTiles(gameState, indices);
      updateScoreboard(gameState);
      checkWin(gameState);
      input.value = '';
      input.focus();
    }
    event.preventDefault();
  });
}

function init (gameState) {
  gameState.targetWord = chooseWord();
  createWordTiles(gameState.targetWord);
  listen(gameState)
}

