class AddUsersToUrls < ActiveRecord::Migration[6.0]
  def change
    add_reference :urls, :user
  end
end
