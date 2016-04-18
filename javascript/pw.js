$(document).ready( function(){
  var access = window.localStorage.getItem("access");

  if ( $('body').hasClass('session') && access != "y") {
    window.location.href = "/info";
  }

  if ( $('body').hasClass('info') && access === "y") {
    window.location.href = "/0000";
  }

  $('form').on('submit', function(e) {
    e.preventDefault();
    var pw = $('#pw').val();
    if ( pw == 'rhythmicrituals') {
      window.localStorage.setItem("access", "y");
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
