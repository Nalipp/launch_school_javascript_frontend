var numCode;
$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var key = $('input[type=text]').val();
    if (key.length > 1) {
      alert('please enter 1 character');
    } else {
      numCode = key.charCodeAt(0);
    }
  })

  $(document).off('keypress').on('keypress', function(e) {
    if (e.which !== numCode) {
      return;
    } else {
      $('a').trigger('click');
    }
  });

  $('a').on('click', function(e) {
    e.preventDefault();
    $('#accordion').slideToggle();
  });
});
