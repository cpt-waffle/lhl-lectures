class CreateOwners < ActiveRecord::Migration[6.0]
  def change
    create_table :owners do |t|
      t.string :name
      t.timestamps
    end
  end
end

# 1) rollback all the way 
# 2) remake the migrations in order
# 3) add the foreign key to cats_table on creation

####################################

# 1) make a new migration which adds a foreign key to the cats_table
###################################
#  it depends on a few things.....

#  If you working on a branch.. and you made a mistake with your migrations
#  rollback, fix migration and migrate
## Rolling back deletes the table....