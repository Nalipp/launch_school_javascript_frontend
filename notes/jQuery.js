// **********************************************************************************************************************
// jQuery
// **********************************************************************************************************************
//
// *loading
// *selecting
// *build in methods
// *events
// *each
// *forms
// *animations
//
//
// **********************************************************************************************************************
// *loading
//
    $(document).ready(function() { });            // loads after the dom loads
    $(window)on('load', function() { });          // loads after the entire page loads

    $(document).ready(function() { });            // these two are the same 
    $(function() { });                            // they both run only when the page is loaded (second one is cleaner) 


// **********************************************************************************************************************
// *selecting

    $('li.even')                                // selects even li's
      // ??? not sure if this refers to class name with even or all even elements, might be classname

    $('li').filter('.class_name');              // selects li's with classname specified
    $('li').filter(':odd');                     // selects li's and filters using css psuedo selectors
    $('li').filter('[id]');                     // selects li's with id elements

    $('li').length;                             // lenght of the array of li items
    $('li').first();                            // opperates on the array of li items
    $('li').last()                              // opperates on the array of li items

    $('li')[0];                                 // returns dom element
    $('li').eq(0);                              // returns a jquery object back (we can chain methods)
    $('li').eq(-3);                             // 3rd from the end (returns jquery object)

    $('li').find('p + p');                      // allows you to use css selectors

    $('table tr:even').addClass('.striped');    // adding a class to every ohter row
    $('table').find('tr:odd').removeClass('striped);
    $('table').find('tr').filter(':even').toggleClass('striped');
    $('li').filter(':visible').fadeOut(400);    // filters elements if they are visible

    $('li').parrent();                          // accessing the next parent (ul)
    $('li').parrents('ul');                     // accessing all the parents with 'ul'(optional)
    $('li').closest('ul');                      // similar to parents but grabs the first closest match
                                                   // if there is no element specified returns self

    $('article li li').filter(":contains('ac ante')");    // contains text string
    $('li').not(".protected");                  // selects all li's except class 'protected'
    $('li:not(".protected")');

    $('li').next();                             // selects next sibling (1st only)
    $('li').prev();                             // selects previous sibling (1st only)
    $('li').nextAll();                          // selects all siblings after current
    $('li').prevAll();                          // selects all siblings before current
    $('li').siblings();                         // selects all siblings

    $('a[href^=#]');                            // selects all hrefs that start with '#'
    $('a[href$=#]');                            // selects all hrefs that end with '#'
    $('[class*=block]');                        // selects all element's that have a class with the word 'block' 
                                                  // the element is not required!
    $('.close, .modal-layer')                   // selects multiple properties

    // find vs filter
      // filter will select subset of element from the selected element
      // find will select descendent/children of selected element

// **********************************************************************************************************************
// *build in methods

  // getter setter

    $('#id_name').width(600);                   // sets the width (appends 'px' automatically)
    $('#id_name').width();                      // gets the width
    $('#id_name').val('hi');                    // sets the value
    $('#id_name').val();                        // gets the value
    $('li').text();                             // getter and setter

    $('#id_name').css('color', 'green').css('background', 'yellow');  // methods can be chained
    $('#id_name').css({                         // writen with object syntax
      color: 'green',
      backgroundColor: 'yellow',                // accepts camel case
    });

  // visibility

    $('#accordion').slideToggle();              // toggle an element visability on and off 

    $('li').show();                             // show the element 
    $('li').hide();                             // hide the element 

    $('#element').remove();                     // remove element by selector (not including children)
    $('#element').empty();                      // remove element by selector (including children)

    $(window).scrollTop();                      // returns top position of the current view window

    $e.nextAll('div').fadeIn(400);              // fades in an element (useful when css display is set to none)

    // toggle
    isValid = validateCC(cc_number) % 10 == 0;

    $(this).find(".success").toggle(isValid);
    $(this).find(".error").toggle(!isValid);

  // css

    $e.siblings('.modal').css('display': 'block');

    $e.siblings('.modal').css({
      'display': 'block',
      'top': $(window).scrollTop() + 30,
    });


// **********************************************************************************************************************
// *events

    $(document).on('keypress', function(e) {});                    // event handler on
    $(document).off('keypress');                                   // unbind event handler
    $(document).off('keypress').on('keypress', function(e) {});    // unbind before listening for another event

    $('form').on('submit', function(e) {})                         // submiting a form (must be attached to form element

    e.preventDefault();                             // prevent and event processing

    $(function() {                                  // .on() is the event handler
      $('a').on('click', function(e) {              // e is the evnet
        e.preventDefault();                         // prevent url request
      });
    });


  // *trigger
      $('a').trigger('mouseover');      // allows you to trigger an event handler that has already been defined
                                          // this can be useful if you want to trigger an existing event in an expression
      $('a').on('mouseover', function() {
        $('body').css('background', 'green');
      }

  // selecting the target element
      $('ul').on('click', 'a', function(e) {
        $(e.target)                    // the element that triggered the event [img]
        $(e.currentTarget)             // the element the event listener is attached to [a]
        $(this)                        // essentially the same as current target
        $(e.currentTarget).index()     // will find the index of the current target 
                                         // withing the list of parent elements (not all the a's on the page)
      }

    



// **********************************************************************************************************************
//  *each
    $('li').each(function() { this });          // this is each element in the selected array 
    $('li').each(funciton() {
      console.log(this.attr(id));               // logs the id attributes of the li items
    });

    $(':input').filter(':text').each(function() {  // filters text inputs and logs the text of each input
      console.log($(this).val());               // $(this) is required so we an use .val();
    });


// **********************************************************************************************************************
// *forms

    $('form').on('submit', function(e) {
      e.preventDefault();
      $input = $(this).find('input[type=text]');          // when submiting a form access the element using $(this)

      $p.text('Your favorite fruit is ' + $input.val());
    });

    $inputs = $(':input');                      // grabs all the inputs on the page (includes buttons)
    $inputs.filter(':text');                    // filters inputs by [type=text]
    $(':radio').filter(':checked');             // all radios that are checked

    $(':radio').filter('['value=value-name']').prop('checked', true) // filter by value name, set checked
      // prop is better than attr bc attr won't actually submit the form with the checked status updated
    
    
// **********************************************************************************************************************
// *animations

    $('p').fadeOut();         // speed is default 400 
    $('p').fadeIn();          // 'slow' / 'fast can also specified in place of miliseconds number
    $('p').fadeToggle();      // 'slow' => 200 / 'fast' => 600
    $('p').fadeTo(400, .5);   // requires you to specify miliseconds so that opacity property is accessabe

    $('p').fadeIn(250, function() {   // animations also execute callbacks
      $(this).addClass('bold');
    });

    $('p').slideUp();    
    $('p').slideDown(); 

    $('p').slideToggle(300, 'linear', function() {  // 'linear' is an easing argument 'swing' is default
      console.log('sliding complete');              // find more  https://api.jqueryui.com/easings/
    ));

    $('p').animate({                  // allows you to animate position
      left: 500,
      top: 250
    }, 400, function() {
      $(this).text('All done!');
    });

    $('p').slideUp(250).fadeIn();     // chaining animations
    $('p').delay(300);                // can be used in place of setTimeout
    $('p').stop().fadeToggle(200);    // stop multiple animations from being added to the que and only send current request

    $('p').fadeIn(200).animate({       
      top: '+=' + $('p').height(),    // allows you to animate the transition to the height by adding after each animation
      height: 0,                      // animates until the hieght is 0 and top is the height of the $('p') element
    }).finish();            // finish() stops all qued animations and jumps to the end of the current request immediatley 

    $.fx.off = ture       // globaly turns off all animations so that their affects happen immediatley (used for testing)


// **********************************************************************************************************************
// *concepts

    $("form").get(0).reset()  // convert to dom element and reset(is a pure javascript method) to the default values

