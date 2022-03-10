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

#  owners
#  what is the relationship between these 2 tables?
#  Owner has cats ------ owner_id inside cat table
#  cats

#  WHEN YOU ARE ON YOUR BRANCH
# and the code hasn't been added to production 
# do CHOICE 1 
# CHOICE 1
# rollback re-add the foreign key
# and re-migrate 


# CHOICE 2
# make a new migration which will add a foreign key
# and then migrate

