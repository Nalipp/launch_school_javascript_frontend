let targetNumber = Math.floor(Math.random() * 10) + 1;
// let targetNumber = 2; 
let count = 0;

function init (currentCount, currentTargetNumber) {
  var currentCount = currentCount || count;
  var currentTargetNumber = currentTargetNumber || targetNumber;

  document.querySelector('button').addEventListener('click', function() {
    var textInput = document.querySelector('input');
    console.log(targetNumber); 
    check(textInput.value);
  });
}

function check (value) {
  if (Number(value) === targetNumber) {
    showWin();
  } else if (count > 5) {
    showLoss();
  } else {
    showError();
  }
}

function showWin () {
  // var form = document.querySelector('form');
  // form.classList.toggle('hide-form');
  // var h1 = document.querySelector('h1');
  // var introText = 'you win';
  // h1.append(introText);
  window.alert('you win');
}

function showError () {
  count += 1;
  console.log(count);  
  console.log(targetNumber);  
  window.alert('guess again');
  init(
}

function showLoss () {
  window.alert('you loose!');
}

init();


//     # Number-guessing
//     - Write the `init` function to set up an event listener on the form. The event listener should pass the value of the input element to the `check` function.
//     - Write the `check` function to accept a value from the event listener and check it against the `targetNumber`. 
//       - If the values match, call the `showWin` function
//       - If the values do not match, call the `showError` function. 
//       - If the values do not match, and the player has made more than five guesses, call the `showLoss` function. 
//     - Write the `showWin` function to remove the form and any error message, and show a message telling the player they win.
//     - Write the `showError` function to show a message telling the player their guess is incorrect.
//     - Write the `showLoss` function to remove the form and show a message telling the player they lose.
