# midterm time
#  you and your group are working on your schema
#  SCHEMA.SQL
#  you add a new table
#  your group memebers add a few new tables
#  you all merge and now have merge conflicts....
class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.timestamps
    end
  end
end
