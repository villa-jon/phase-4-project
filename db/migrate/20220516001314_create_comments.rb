class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :user
      t.belongs_to :blog
      t.string :comment

      t.timestamps
    end
  end
end
