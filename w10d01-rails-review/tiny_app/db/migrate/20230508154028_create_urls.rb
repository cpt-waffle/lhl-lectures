class CreateUrls < ActiveRecord::Migration[7.0]
  def change
    create_table :urls do |t|
      t.string :shortURL
      t.string :longURL
      # t.references :users
      t.timestamps
    end
  end
end

# - to fix this issue
# 1- rollback and add the column 
# 2- make a new migration