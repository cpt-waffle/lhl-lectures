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

# Well it actually Depends......

#  Option 1 
#  rollback
#  Great only if you are working on your own branch and feature has not been
#  added to production!
#

# Option 2
#  another migration
#  