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


#  1 - rollback 
#  2 - add another migration 