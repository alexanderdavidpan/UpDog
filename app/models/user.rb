require_relative "friendship"

class User < ActiveRecord::Base
  # Remember to create a migration!
  has_many :messages
  has_many :friendships

  def friendships
    user_id = self.id
    friends = []
    Friendship.where(friend_one_id: user_id, friends: true).each do |friendship|
      friends << User.find(friendship.friend_two_id)
    end
    Friendship.where(friend_two_id: user_id, friends: true).each do |friendship|
      friends << User.find(friendship.friend_one_id)
    end
    friends
  end
end
