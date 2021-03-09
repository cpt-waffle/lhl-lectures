class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.references :make, null: false, foreign_key: true
      t.references :model, null: false, foreign_key: true
      t.references :trim, null: false, foreign_key: true
      t.references :style, null: false, foreign_key: true
      t.string :color
      t.integer :year

      t.timestamps
    end
  end
end
