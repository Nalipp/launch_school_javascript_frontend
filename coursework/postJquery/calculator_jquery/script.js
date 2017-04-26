document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').onsubmit = function(e) {
    e.preventDefault();

    var num1 = Number(this.querySelector('#num1').value);
    var num2 = Number(this.querySelector('#num2').value);
    var opperator = this.querySelector('#opperator').value;

    calculate(num1, opperator, num2);
  };

  function calculate(num1, opperator, num2) {
    var result = 0;

    switch(opperator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
    }
    console.log(result);

    $('h2').innerHTML = result;
  }
});

function $(arg) {
  var arr = document.querySelectorAll(arg);
  if (arr.length > 1) return arr;
  return document.querySelector(arg);
}

// submit = window.onload
// load = onload
// click = onclick
// submit = onsubmit
// text = innerHTML
// val = value
