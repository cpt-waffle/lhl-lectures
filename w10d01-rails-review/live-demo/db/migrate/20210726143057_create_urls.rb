class CreateUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :urls do |t|
      t.string :shortURL
      t.string :longURL
      t.integer :number
      t.timestamps
    end
  end
end
#  NEVER EVER EVER GO BACK IN TIME!!!!
#  ALWAYS make a migration, if you forgot to add, a new column/table/key to your database....
