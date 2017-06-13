import 'jquery';

$(document).ready(() => {

  // slider movement
  $('span.control_prev').click(function() {
    moveLeft();
  });
  $('span.control_next').click(function() {
    moveRight();
  });
  // slider movement with left/right arrow
  $(document).keydown(function(e) {
    e.keyCode == 37 ? moveLeft() : e.keyCode == 39 ? moveRight() : null;
  });

  // calculation of slider width/height
  var slide_count = $('#slider ul li').length;
  var slide_width = $('#slider ul li').width();
  var slide_height = $('#slider ul li').height();
  var slide_ul_width = slide_count * slide_width;

  $('#slider').css({width: slide_width, height: slide_height});

  var btn_width = $('span.control_next').width();

  // toggle controls visibility
  $("#slider").on({
    'mouseenter': function() {
      $('span.control_next').animate({
        'right': "0px" //moves left
      }, 100);
      $('span.control_prev').animate({
        'left': "0px" //moves left
      }, 100);
    },
    'mouseleave': function() {
      $('span.control_next').animate({
        'right': -btn_width //moves left
      });
      $('span.control_prev').animate({
        'left': -btn_width //moves left
      });
    }
  });

  $('#slider ul').css({
    width: slide_ul_width,
    marginLeft: -slide_width
  });

  $('#slider ul li:last-child').prependTo('#slider ul');


  //movement functions
  function moveLeft() {
    $('#slider ul').animate({
      left: + slide_width
    }, 200, function() {
      $('#slider ul li:last-child').prependTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };

  function moveRight() {
    $('#slider ul').animate({
      left: -slide_width
    }, 200, function() {
      $('#slider ul li:first-child').appendTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };

});
