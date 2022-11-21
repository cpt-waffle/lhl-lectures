class CreateUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :shortURL
      t.string :longURL
      # t.references :users
      t.timestamps
    end
  end
end

# 1 -- rollback 
# if you are on a branch, and the migration, has not been ran in prod, staging,
#    you can rollback!  

# 2 -- make another migration 
#    ^