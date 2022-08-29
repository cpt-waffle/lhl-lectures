class CreateUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :shortURL
      t.string :longURL
      #  t.references :users
      t.timestamps
    end
  end
end

# 1 

#  rollback, and add the fk reference and migrate

# 2

# make a new migration