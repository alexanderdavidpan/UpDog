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
    var friend = $(this).html()
    $('#chat_window').empty();
    $('#chat_window').append('<h3>' + friend + '</h3><hr>')
    $('#message_box').focus();
    $('#message_box').select();
    $('#message_box').trigger('focus');
    $('#message_box').trigger('click');
  });

  function submitMessage(message, username) {
    $('#chat_window').append('\n<p>' + username + ': ' + message + '</p>');
    $('#chat_window').animate({scrollTop: $('#chat_window').prop("scrollHeight")}, 500);
    $('#message_box').val('')
  }

  $('#message_box').keydown(function(e) {
    if (e.keyCode == 13) {
      var message = $('#message_box').val();
      var username = $('a.username').text();
      submitMessage(message, username);
    }
  });

  $('#submit_message').click(function(e) {
    var message = $('#message_box').val();
    var username = $('a.username').text();
    submitMessage(message, username);
  });

});
