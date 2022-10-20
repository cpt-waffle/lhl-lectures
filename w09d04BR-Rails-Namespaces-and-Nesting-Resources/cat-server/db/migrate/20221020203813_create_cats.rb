class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :color
      # t.references :owners
      t.timestamps
    end
  end
end


# ----------
# 1) rollback rails db:rollback
# 2) add the foreign key reference
# 3) re-migrate


#------------
# 1) make a new migration
# 2) add foreign key
# 3) run the migration