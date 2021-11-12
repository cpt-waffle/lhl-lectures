class CreateOwners < ActiveRecord::Migration[6.0]
  def change
    create_table :owners do |t|
      t.string :name
      t.timestamps
    end
  end
end

## Option 1 
# Rollback everything
# delete all migrations
# create all migrations in the right order 
# and make the cats has a foreign_key owner_id!!!

#---- in specific CIRCUMSTANCES you are Both RIGHT!!!

## Option 2
# make a new migration with the foreign_key owner_id

######################## always do option 2 instead ( if dont know which to choose )