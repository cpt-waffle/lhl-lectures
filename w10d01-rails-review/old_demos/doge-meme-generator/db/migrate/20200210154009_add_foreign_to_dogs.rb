class AddForeignToDogs < ActiveRecord::Migration[5.2]
  def change
    add_reference :dogs, :user, index: true, foreign_key: true
  end
end
