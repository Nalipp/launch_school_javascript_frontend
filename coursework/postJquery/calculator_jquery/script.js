$(document).ready(function() {
  $('form').submit('click', function(e) {
    e.preventDefault();
    var $num1 = Number($(this).find('#num1').val());
    var $num2 = Number($(this).find('#num2').val());
    var $opperator = $(this).find('#opperator').val();

    calculate($num1, $opperator, $num2);
  });

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

    $('h2').text(result);
  }
});
