class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :color
      # t.references :users
      t.timestamps
    end
  end
end

#  1 -- do a rollback and re-add and then re-migrate
#  2 -- make a new migration and add 