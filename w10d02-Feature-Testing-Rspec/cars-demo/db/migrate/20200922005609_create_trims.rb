class CreateTrims < ActiveRecord::Migration[6.0]
  def change
    create_table :trims do |t|
      t.string :trim_level

      t.timestamps
    end
  end
end
