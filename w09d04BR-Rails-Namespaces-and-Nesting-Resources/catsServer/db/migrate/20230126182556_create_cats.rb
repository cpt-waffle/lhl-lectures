class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :color
      # t.references :users # FK 
      t.timestamps
    end
  end
end


#  How do I fix this?????

#  1---go back x amount of migrations (rollback)
#  the only time you should do this, IF you don't care about
#  previous data, and most likey you are on your branch doing your own work.
 
#  --- WHEN is approriate

#  2---make a new migration that adds a foreign key to the cats table