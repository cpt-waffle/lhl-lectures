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

#  Cats belong to users
#  a user has many cats

#  1 -- do a rollback and re-add the fk, and re-migrate
#  2 -- make a new migration and add fk there
