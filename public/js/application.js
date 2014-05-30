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
    console.log('double clicked')
    $('#friends_list div').removeClass("current_friend")
    $(this).addClass("current_friend")
  });

  $('#message_box').keydown(function(e) {
    if (e.keyCode == 13) {
      var message = $('#message_box').val();
      var username = $('a.username').text();
      $('#chat_window').append('\n<p>' + username + ': ' + message + '</p>');
      $('#chat_window').animate({scrollTop: $('#chat_window').prop("scrollHeight")}, 500);
      $('#message_box').val('')
    }
  });

  $('#message_submit').click(function(e) {
    var message = $('#message_box').val();
    var username = $('a.username').text();
    $('#chat_window').append('\n<p>' + message + '</p>');
    $('#chat_window').animate({scrollTop: $('#chat_window').prop("scrollHeight")}, 500);
    $('#message_box').val('');
  });

});
