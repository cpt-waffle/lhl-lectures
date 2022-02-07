class CreateUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :shortURL
      t.string :longURL
      t.timestamps
    end
  end
end

# Rollback vs Migrations

### IF you are working on your own branch, and the chances you've added
# HAVE NOT BEEN commited to the production server (master/main)
#  you can rollback...

### OTHERWISE
#  you HAVE TO make a new migration to fix a table...