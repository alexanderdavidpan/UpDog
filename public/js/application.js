$(document).ready(function() {
  $('#signup_submit').click(function(){
    var signup_info = $('input.signup').serialize();
    $.post('/signup', signup_info, function(){
      window.location.href = '/'
    });
  });

  $('#login_submit').click(function(){
    var login_info = $('input.login').serialize();
    $.post('/login', login_info, function(){
      window.location.href = '/'
    });
  });
});
