class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :name
      t.string :post
      t.string :date

      t.timestamps
    end
  end
end
