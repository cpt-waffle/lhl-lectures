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

#  if you are on your own branch (feature)
# AND if the table has not made it to production server
# rollback <> go back (drop the table) add the column, re-migrate

# if thet table is in prod, new migration!
# make a new migration -- and add a column (UPDATE TABLE)