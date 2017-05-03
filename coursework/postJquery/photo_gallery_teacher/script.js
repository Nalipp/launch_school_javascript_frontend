$(function() {
  var index = 0;

  $('li img').on('click', function() {
    var imgIndex = ($('li img')).index($(this));
    changeImage($(this), imgIndex);
  });

  $('#arrow-right').on('click', function() {
    var imgIndex = ($('li img')).index($(this));
    index === 3 ? index = 0 : index += 1;
    changeImage($(this), index);
  });

  $('#arrow-left').on('click', function() {
    var imgIndex = ($('li img')).index($(this));
    index === 0 ? index = 3 : index -= 1;
    changeImage($(this), index);
  });
});

function changeImage($clickedElement, imgIndex) {
  var imageSrc = $('li img').eq(imgIndex).attr('src');

  $('img').removeClass('active');
  $('li img').eq(imgIndex).addClass('active');

  $('figure img').eq(1).stop().fadeOut(function() {
    $(this).attr('src', imageSrc).fadeIn();
  });
}

