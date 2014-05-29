class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :friend_one_id
      t.integer :friend_two_id
      t.boolean :friends?, default: false

      t.timestamps
    end
  end
end
