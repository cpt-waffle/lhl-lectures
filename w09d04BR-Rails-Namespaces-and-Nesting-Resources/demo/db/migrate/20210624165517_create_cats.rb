class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :age
      t.string :color
      t.belongs_to :owner, foreign_key: true
      t.timestamps
    end
  end
end
