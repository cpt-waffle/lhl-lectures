class CreateFarms < ActiveRecord::Migration[6.0]
  def change
    create_table :farms do |t|
      t.string :name
      t.timestamps
    end
  end
end
