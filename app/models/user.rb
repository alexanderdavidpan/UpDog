require_relative "friendship"
require 'bcrypt'

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

  # users.password_hash in the database is a :string
  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end
end
