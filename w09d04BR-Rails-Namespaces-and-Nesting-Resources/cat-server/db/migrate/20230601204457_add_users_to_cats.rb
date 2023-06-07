class AddUsersToCats < ActiveRecord::Migration[7.0]
  def change
    add_reference :cats, :user
  end
end
