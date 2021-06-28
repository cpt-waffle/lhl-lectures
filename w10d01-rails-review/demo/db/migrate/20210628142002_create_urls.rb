class CreateUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :shortURL
      t.string :longURL
      t.timestamps
    end
  end
end
#  I forgot to add t.string :longURL <------------------------

# A) just add t.string :longURL directory to the file
# B) rollback first, then add t.string :longURL <----- 
# C) Make a new migration, that adds the missing column to the table

# We Cannot Change history!!!
#  Feature has been added, users have been created!!
# if we rollback... we are going to lose the users....