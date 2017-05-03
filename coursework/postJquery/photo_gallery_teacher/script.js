$(function() {
  var $imgDisplay = $('#img-display');   
  var $nav = $('div#img-display + ul');
  
  $nav.on('click', 'a', function(e) {
    e.preventDefault();
    var $li = $(e.currentTarget).closest('li');
    var idx = $li.index();

    $imgDisplay.find("figure").stop().filter(':visible').fadeOut(300);
    $imgDisplay.find("figure").eq(idx).delay(300).fadeIn(300);

    $nav.find('.active').removeClass('active');
    $li.find('img').addClass('active');
  });
});
