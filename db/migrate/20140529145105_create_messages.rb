class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :message
      t.belongs_to :chat
      t.belongs_to :user

      t.timestamps
    end
  end
end
