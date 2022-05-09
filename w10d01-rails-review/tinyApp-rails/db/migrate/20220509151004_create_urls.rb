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

# Rollback --- if you are only on your branch, 
# and the changes have not been pushed out

# Make a new migration 