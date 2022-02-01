class CreateCats < ActiveRecord::Migration[6.0]
  def change
    # CREATE CATS (name: VARCHAR15)
    # CREATE TABLE cats (name varchat, id primary key etc)
    create_table :cats do |t|
      t.string :cat_name
      t.integer :age
      t.timestamps
    end
  end
end
