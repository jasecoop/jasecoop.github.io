$(document).ready( function(){
  $('.aboutToggle-open').on('click', function(e) {
    e.preventDefault();
    $('.about').show();
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
