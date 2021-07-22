# A migration is a record of a table creation/deletion/default insertion
# schema.sql <--- midterm 
class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :age
      t.string :color
      t.timestamps
    end
  end
end
