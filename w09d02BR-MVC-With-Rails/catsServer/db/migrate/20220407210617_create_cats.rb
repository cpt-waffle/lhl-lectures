class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :age
      t.timestamps
    end
  end
end

#  midterms 
#  day 1 - 3 
#  creating tables and seeds
#  how did you do it?
# schema.sql
# 01_users.sql

# migrations 