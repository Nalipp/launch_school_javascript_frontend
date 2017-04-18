document.addEventListener('DOMContentLoaded', function() {

  var guessCount;
  var correctAnswer;

  var input = document.querySelector('#guess');
  var btn = document.querySelector('input[type="submit"]');
  var p = document.querySelector('p');
  var reset = document.querySelector('a');

  btn.addEventListener('click', function(event) {
    event.preventDefault();

    var inputValue = parseInt(input.value, 10);

    if (isNaN(inputValue)) {
      alert('That is not a valid number');
    } else {
      guess(inputValue);
    }
  });

  reset.addEventListener('click', function(event) {
    event.preventDefault();
    newGame();
  });

  function newGame() {
    guessCount = 0;
    correctAnswer = Math.floor(Math.random() * 100) + 1;
    p.textContent = 'Guess a number between 1 and 100';
    input.value = '';
  }

  function guess(value) {
    guessCount += 1;
    if (value === correctAnswer) {
      p.textContent = 'You got it! guess ' + guessCount;
    } else if (value < correctAnswer) {
      p.textContent = 'Too low! guess ' + guessCount;
      input.value = '';
    } else {
      p.textContent = 'Too high! guess ' + guessCount;
      input.value = '';
    }
  }

  newGame();
});

