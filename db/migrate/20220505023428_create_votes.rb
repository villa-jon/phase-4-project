class CreateVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :votes do |t|
      t.references :blog
      t.references :user 
    
      t.integer :value, default: 0

      t.timestamps null: false 
    end
  end
end
