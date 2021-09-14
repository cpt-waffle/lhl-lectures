class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.timestamps
    end
  end
end
