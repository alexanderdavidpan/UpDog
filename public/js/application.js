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

  $('#friends_list div').dblclick(function(){
    
  });

  $('#message_box').keydown(function(e) {
    if (e.keyCode == 13) {
      var message = $('#message_box').val();
      var username = $('a.username').text();
      $('#chat_window').append('\n<p>' + username + ': ' + message + '</p>');
      $('#message_box').val('')
    }
  });

  $('#message_submit').click(function(e) {
    var message = $('#message_box').val();
    var username = $('a.username').text();
    $('#chat_window').append('\n<p>' + message + '</p>');
    $('#message_box').val('')
  });

});
