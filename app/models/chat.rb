class Chat < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :friendship
  has_many :messages
end
