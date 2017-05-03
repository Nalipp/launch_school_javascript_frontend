$(function() {
  var birthstoneObj = {
    "January": "garnet",
    "February": "amethyst",
    "March": "aquamarine or bloodstone",
    "April": "diamond",
    "May": "emerald",
    "June": "pearl, moonstone, or alexandrite",
    "July": "ruby",
    "August": "peridot",
    "September": "sapphire",
    "October": "opal or tourmaline",
    "November": "topaz or citrine",
    "December": "turquoise, zircon, or tanzanite",
  }

  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass('show');
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass('show');
  });

  $(".button, button").on("click", function(e) {
    e.preventDefault();

    $(this).toggleClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next('.accordion').toggleClass('opened');
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var $ccForm = $(this);
    var cc_number = $(this).find("[type=text]").val();

    isValid = validateCC(cc_number) % 10 == 0;

    $(this).find(".success").toggle(isValid);
    $(this).find(".error").toggle(!isValid);
  });

  function validateCC(cc_number) {
    var odd_total = 0;
    var even_total = 0;

    cc_number = cc_number.split("").reverse();
    for (var i = 0, len = cc_number.length; i < len; i++) {
      if (i % 2 == 1) {
        cc_number[i] = (+cc_number[i] * 2) + "";
        if (cc_number[i].length > 1) {
          cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
        }
        else {
          cc_number[i] = +cc_number[i];
        }
        odd_total += cc_number[i];
      }
      else {
        even_total += +cc_number[i];
      }
    }
    return odd_total + even_total;
  }

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text(),
        $stone = $("#birthstone");

    $stone.text('Your birthstoe is ' + birthstoneObj[month]);
  });
});
