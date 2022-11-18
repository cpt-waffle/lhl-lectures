class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :color
      # t.references :users
      t.timestamps
    end
  end
end


#  you can rollback
#  you can make a new migration