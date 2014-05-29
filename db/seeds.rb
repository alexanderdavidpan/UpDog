users = %w[ryan christine reid simon alex
           isabel justin neal beverly zach
           ruben connor kenny lawrence pei
           siyan tuan nirav payam sahan
           insung mario steven stephen]

users.each do |user|
  User.create(username: user, password: "yolo")
end
