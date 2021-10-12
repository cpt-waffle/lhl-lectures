class CreateCats < ActiveRecord::Migration[6.0]
  # schema.sql
  # 1 --- CREATE USERS
  # 2 --- CREATE CATS
  # 3 --- CREATE PETS fk 
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.timestamps
    end
  end
end
