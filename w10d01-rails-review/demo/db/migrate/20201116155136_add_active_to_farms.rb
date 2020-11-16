class AddActiveToFarms < ActiveRecord::Migration[6.0]
  def change
    change_table :farms do |t|
      t.boolean :active_farm, default: true
    end
  end
end
