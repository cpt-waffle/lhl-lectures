class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :color
      # t.references :owners
      t.timestamps
    end
  end
end


#-------------
#1) rollback 
#2) add a fk 
#3) re-migrate


#-------------
#1) make a new migration
#2) add fk
#3) migrate