users = %w[alex christine reid simon ryan
           isabel justin neal beverly zach
           ruben connor kenny lawrence pei
           siyan tuan nirav payam sahan
           insung mario steven stephen]

users.each do |user|
  @user = User.create(username: user, password: "yolo")
  Friendship.create(friend_one_id: 1, friend_two_id: @user.id, friends: true)
end


