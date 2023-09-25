class AddUserToCats < ActiveRecord::Migration[7.0]
  def change
    add_reference :cats, :user
  end
end


#  roll back a commit/migration <--- deletes all data/history of commit
#  add a new commit/migration  <--- keeps everything just makes change for later
