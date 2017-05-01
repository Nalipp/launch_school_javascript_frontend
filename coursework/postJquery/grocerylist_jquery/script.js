$(function() {
  var $ul = $('ul');

  function addItem(item, quantity) {
    $ul.append('<li>' + quantity + ' ' + item + '</li>');
  }

  $('form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    var item = $form.find('#grocery-item').val();
    var quantity = $form.find('#quanitity').val() || 1;

    addItem(item, quantity);

    // $form[0].reset();
  }); 
});


