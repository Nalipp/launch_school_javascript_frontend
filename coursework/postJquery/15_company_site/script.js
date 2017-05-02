var $li = $('article ul li');

$('.member-profile').hide();

$li.each(function() {
  $(this).on('click', function(e) {
    e.preventDefault();

    $("<div class='modal'></div>").appendTo(document.body);

    var bio = $(this).find('p').text();
    var name = $(this).find('h3').text();
    var image = this.querySelector('img').src;

    $('.modal').append('<p>' + bio + '</p>');
    $('.modal').prepend('<h3>' + name + '</h3>');
    $('.modal').prepend('<img>');
    $('.modal img').attr('src', image);

    $('.modal').css({
      'display': 'block',
      'top': $(window).scrollTop() + 50,
    });

    $("<div class='modal-layer'></div>").appendTo(document.body);
    $('.modal-layer').css({
      'display': 'block',
      'top': $(window).scrollTop(),
    });

    $('.modal-layer').on('click', function() {
      $(this).remove();
      $('.modal').remove();
    });
  });
});
