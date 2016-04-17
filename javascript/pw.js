$(document).ready( function(){

  $('form').on('submit', function(e) {
    e.preventDefault();
    var pw = $('#pw').val();
    if ( pw == 'rhythmicrituals') {
      window.location.href = "/0000";
    } else {
      var html = '<div class="header-item error-msg"><span>Password incorrect</span>'
      $('form').append(html);
      setTimeout(function(){
        $('.error-msg').fadeOut();
      }, 3000);
    }
  })

});
