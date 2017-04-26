$('input[type=submit]').on('click', function(e) {
  e.preventDefault();
  var $num1 = Number($('#num1').val());
  var $opperator = $('#opperator').val();
  var $num2 = Number($('#num2').val());
  calculate($num1, $opperator, $num2);
});

function calculate(num1, opperator, num2) {
  var result;

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
  $('#result').empty();
  $('#result').append('<h1>' + result + '</h1>');
}


