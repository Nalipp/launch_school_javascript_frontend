$(function() {
  var $blinds = $('[id^=blind]');

  function startAnimation() {
    $blinds.each(function(i) {
      var $blind = $blinds.eq(i);
      var speed = 350;
      var delay = 1200;

      $blind.delay(delay * i + speed).animate({
        top: '+=' + $blind.height(),
        height: 0,
      }, speed);
    });
  }

  $('#reset-button').on('click', function() {
    $blinds.finish();
    $blinds.removeAttr('style');
    startAnimation();
  });

  startAnimation();
});
