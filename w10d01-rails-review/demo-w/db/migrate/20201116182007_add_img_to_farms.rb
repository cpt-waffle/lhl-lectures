class AddImgToFarms < ActiveRecord::Migration[6.0]
  def change
    add_column :farms, :img, :text
  end
end
