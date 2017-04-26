// # Word-guessing game

// This exercise creates a game that lets a player guess letters in a word. When the game starts, the `div#word` should be populated with `div.letter` tiles, one for each letter in the target word. As a player makes correct guesses, the tiles in the target word should be updated to show the correct guesses. As a player makes incorrect guesses, the scoreboard should be updated to show each incorrect guess; also, the number of guesses remaining should be decremented. After seven incorrect guesses, the player loses. The player wins by guessing all of the letters in the word before running out of guesses.

// If you're just getting started with JavaScript and DOM manipulation, the instructions below will guide you. If you're more experienced and interested in designing the overall solution from scratch, skip the directions below and get started; you can delete all the function stubs in the JS, too.

// ## Steps

// - Write a function `chooseWord` that returns a random word from the `words` array.
// - Write a function `createWordTiles` that takes a string as its argument, creates the `div.letter` tiles for each letter in the word, and places the tiles in `div#word`.
// - Write a function `validate` that takes a string as its argument, and returns `true` if the guess is exactly one letter, and false otherwise.
// - Write a function `testGuess` that takes a single-letter string as its argument. If the letter is in the target word, return an array containing the index (or indices) where the letter appears in the word. If the letter is not in the target word, return an empty array.
// - Write a function `updateWordTiles` that takes an array of indices and updates the DOM to show the letter tiles at the specified indices.
// - Write a function `updateScoreboard` that receives two arguments: the guess, and the number of incorrect guesses so far; it should the Incorrect Guesses and Guesses Remaining portion of the scoreboard.
// - Write a function `listen` that listens for user input, then handles it using the functions you have created.
// - Write a function `init` that uses the other functions you have created to set up and play the game.

// let words = ['horse', 'pig', 'tiger']; 

let words = ['beetle']; 
let gameState = {
  word : null,
  guess: null,
  incorrectGuesses : [],
  guessesRemaining : 7
};

function chooseWord() {
  return words[Math.floor(Math.random()*words.length)];
}

function createWordTiles(word) {
  var tiles = document.querySelector('#word'); 
  word.split('').forEach(function(char) {
    var newDiv = document.createElement('div');
    // var text = document.createTextNode(char);
    // newDiv.appendChild(text);
    newDiv.classList.add('letter');
    tiles.appendChild(newDiv);
  });
}

function validate(guess) {
  return (/[a-z]/.test(guess) && guess.length === 1);
}

function testGuess(guess) {
  var matches = [];
  for (var i = 0; i < gameState.word.length; i++) {
    if (gameState.word[i].indexOf(guess) !== -1) {
      matches.push(i);
    }
  }
  return matches; 
}

function updateWordTiles(indices) {
//Write a function `updateWordTiles` that takes an array of indices and updates the DOM to show the letter tiles at the specified indices.
  for (var i = 0; i < indices.length; i++) {
    // var letter = indices[i];
    var letter = document.createTextNode(gameState.guess);
    var word = document.querySelector('#word')
    word.children[indices[i]].appendChild(letter);
  }
  // alert(gameState.guess);
}

function listen(gameState) {
  document.querySelector('button').addEventListener('click', function() {
  console.log(gameState);
    var guess = document.querySelector('input').value;
    if (validate(guess)) {
      gameState.guess = guess;
      var indices = testGuess(guess); 
      if (indices.length === 0) {
        incorrectGuesses.push(guess) 
      } else {
        updateWordTiles(indices)
      }
      // listen(gameState);
    } else {
      alert('please choose one letter');
    }
      updateScore(gameState);
  }); 
}

function updateScore(gameState) {
// - Write a function `updateScoreboard` that receives two arguments: the guess, and the number of incorrect guesses so far; it should the Incorrect Guesses and Guesses Remaining portion of the scoreboard.
  alert(gameState.incorrectGuesses);
  listen(gameState);

  for (var i = 0; i < gameState.incorrectGuesses.length; i++) {
    var incorrectTd = document.querySelectorAll('td');
alert(incorrectTd);
  }
}

function init(gameState) {
  gameState.word = gameState.word || chooseWord();  
  if (gameState.guess === null) {
    createWordTiles(gameState.word);
  }
  listen(gameState)
}

// document.querySelector('#new-game').addEventListener('click', function() {
//   document.querySelector('#word').textContent = '';
//   init();
// });

init(gameState);



// - Write a function `listen` that listens for user input, then handles it using the functions you have created.
// - Write a function `init` that uses the other functions you have created to set up and play the game.


