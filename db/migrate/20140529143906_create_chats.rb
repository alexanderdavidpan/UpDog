class CreateChats < ActiveRecord::Migration
  def change
    create_table :chats do |t|
      t.belongs_to :friendship

      t.timestamps
    end
  end
end
