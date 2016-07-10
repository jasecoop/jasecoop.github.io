$(document).ready( function(){
  $('.aboutToggle-open').on('click', function(e) {
    e.preventDefault();
    var top = $(window).scrollTop();
    $('.about').show().css('top', top + 'px');
    $(this).hide();
    $('.aboutToggle-close').show();
  });

  $('.aboutToggle-close').on('click', function(e) {
    e.preventDefault();
    $('.about').hide();
    $(this).hide();
    $('.aboutToggle-open').show();
  });

});
