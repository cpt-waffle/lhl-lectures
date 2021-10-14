class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :color
      t.timestamps
    end
  end
end

# if you are on a branch and the tables have not been added
# to master/merged into prod, simply rollback

# ------- WHAT IF ? You made these tables, and they got added
#  into your production server ?
#   make another migration... that adds the foreign key to the table!