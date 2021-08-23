class CreateUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :shortURL
      t.string :longURL
      t.timestamps
    end
  end
end


# 1 - rollback, and add a the new foreign key 
# you rollback when you are currently working 
# on a feature without it being already in prod

# 2 - make a new migration that adds the foreign key
# you make a new migration, when the table is already in prod
