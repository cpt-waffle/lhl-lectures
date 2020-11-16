class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :animal_category
      t.text :img
      t.references :farm, foreign_key: true
      t.timestamps
    end
  end
end
