$(function() {
  var $figure = $('figure');

  $('body').prepend($('header'));
  $('header').eq(0).prependTo('article');

  $('main').find('h1').prependTo('header');

  $($figure.eq(1)).appendTo('article');
  $($figure.eq(0)).appendTo('article');
});
