class AddUsersToUrls < ActiveRecord::Migration[7.0]
  def change
    add_reference :urls, :user
  end
end
