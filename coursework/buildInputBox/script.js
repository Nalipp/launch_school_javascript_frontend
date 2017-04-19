document.addEventListener('DOMContentLoaded', function() {
  // textFieldFocused = false;
  var textField = document.querySelector('.text-field');
  var cursorBlink;

  textField.addEventListener('click', function(event) {
    event.stopPropagation();
    textField.classList.add('focused');

    // textFieldFocused = true;

    cursorBlink = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500) 
  });

  document.addEventListener('click', function(event) {
    var textField = document.querySelector('.text-field');
    textField.classList.remove('focused');
    clearInterval(cursorBlink);
  });

  document.addEventListener('keydown', function(event) {
    if (textField.classList.contains('focused')) {
      clearInterval(cursorBlink);
      textField.classList.remove('cursor');

      textField.textContent = (textField.textContent += event.key);

      if (event.key === 'Backspace') {
        textField.textContent = textField.textContent.slice(0, -10);
      }
    }
  });
});


