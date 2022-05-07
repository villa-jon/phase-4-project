class CreateVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :votes do |t|
      t.string :reference_id
      t.string :reference_type
      t.integer :user_id 
      t.integer :value, default: 0

      t.timestamps null: false 
    end
  end
end
